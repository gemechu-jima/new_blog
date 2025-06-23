'use server'
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key'
export async function getBlogs(limit=5) {
     try {
        const blogs=await prisma.blog.findMany({
            orderBy:{
                createdAt:"desc"
            },
            take:limit
        })
        return blogs
    } catch (error) {
        console.error("Error fetching posts ", error)
        throw new Error("Failed to fetch posts")
    }
}



 export async function createBlog(formData:FormData){
    const title=formData.get("title") as string
    const name=formData.get("name") as string
    const introduction=formData.get("introduction") as string
    const content =formData.get("content") as string
    const image=formData.get("image") as string
    const link =formData.get("link")  as string
    const published = formData.get("published") !== null;
    console.log(formData)
     if(!title && !content){
        return {success:false, message:"Title is required or content"}
     }
    try {
       
       const token = (await cookies()).get('token')?.value
      if (!token)  return {success:false, message:"Unauthorized: no token found"}
      const decoded = jwt.verify(token, JWT_SECRET) as { email: string, userId?: string }

      const ExistUser = await prisma.user.findUnique({
      where: { email: decoded.email } 
    })

    if (!ExistUser)  return {success:false, message:"User not found"}

         await prisma.blog.create({
        data: {
        name,
        title,
        content,
        image,
        introduction,
        link,
        author:ExistUser.username,
        published,
        userId: ExistUser.id ,
    }
    })
        revalidatePath("/")
    return {success:true, message:"successfull created"}
    } catch (error) {
        console.error("Error creating post  ", error)
        throw new Error("Failed to create post")
    }
 }