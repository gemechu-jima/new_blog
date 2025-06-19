'use server'
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { UserProps } from "@/types/User";
async function main(){
    // await prisma.user.create({})
    // await prisma.user.findMany({})
    // await prisma.user.update({})
    // await prisma.user.delete({})
}


export async function createUser(formData:FormData){
    const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword=formData.get('confirmPassword') as string
  if(password!==confirmPassword){
     return { success: false, message:"Password confirm is not match with password" }
  }
    if(!email){
         return { success: false, message:"Email is required" }
    }
    try {
        const user=prisma.user.create({
            data:{email, username, password}
        })
        if((await user).email && (await user).password){
        revalidatePath("/")
        return { success: true, message:"register success full" }
        }
       
    } catch (error) {
         console.error("Error creating user  ", error)
        throw new Error("Failed to create user")
    }
}




export async function getUsers(){
    try {
        const users=await prisma.user.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
        return users
    } catch (error) {
        console.error("Error fetching users ", error)
        throw new Error("Failed to fetch users")
    }
}

export async function getBlogs(limit=5) {
     try {
        const blogs=await prisma.blog.findMany({
            include:{
                author:true
            },
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

export async function getUser(){
    try {
        const user=await prisma.user.findUnique({
            include:{
                blog:true
            },
            orderBy:{
                createdAt:"desc"
            }
        })
        return user
    } catch (error) {
        console.error("Error fetching user ", error)
        throw new Error("Failed to fetch user")
    }
}


 export async function createPost({title, content, userId}:{title:string, content:string, userId:string}){
     if(!title){
        throw new Error("Title is required")
     }
    try {
        const userExists=await prisma.user.findUnique({
            where:{id:userId}
        })
        if(!userExists){
            throw new Error("User not founnd")
        }
        const post=await prisma.post.create({
            data:{
                 title,
                 content,
                 user:{
                    connect:{id:userId}
                 }
            }
        })
        revalidatePath("/")
        return post
    } catch (error) {
        console.error("Error creating post  ", error)
        throw new Error("Failed to create post")
    }
 }