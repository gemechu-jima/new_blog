'use server'
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key'
export async function getBlogs(limit = 15) {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        images: {
          isEmpty: false,
        },
      },
      take:limit
    })
    return blogs
  } catch (error) {
    console.error("❌ Error fetching blogs:", error)
    throw new Error(error instanceof Error ? error.message : 'Unknown error occurred while fetching blogs')
  }
}

export async function update() {
  try {
    const result = await prisma.blog.updateMany({
      where: {

      },
      data: {

      },
    })
    console.log(`✅ Updated ${result.count} blogs with createdAt date.`)
    return `✅ Updated ${result.count} blogs with createdAt date.`
  } catch (error) {
    console.error("❌ Error updating blogs:", error)
  }
}


export async function createBlog(formData: FormData) {
  const title = formData.get("title")?.toString()
  const name = formData.get("name")?.toString()
  const introduction = formData.get("introduction")?.toString()
  const content = formData.get("content")?.toString()
  const imageFiles = formData.getAll("images").filter((val): val is string =>
    typeof val === "string" &&
    val.startsWith("https://res.cloudinary.com/")
  );
  const link = formData.get("link")?.toString() ?? ''
  const published = formData.get("published") !== null;

  console.log("image come", imageFiles)
  if (!title || !content || !introduction || !name) {
    return { success: false, message: "Title is required or content" }
  }
  try {

    const token = (await cookies()).get('token')?.value
    console.log(token)
    if (!token) return { success: false, message: "Unauthorized: no token found" }
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string, userId?: string }

    const ExistUser = await prisma.user.findUnique({
      where: { email: decoded.email }
    })

    if (!ExistUser) return { success: false, message: "User not found" }

    await prisma.blog.create({
      data: {
        name,
        title,
        content,
        images: imageFiles,
        introduction,
        link,
        author: ExistUser.username,
        published: published ?? true,
        userId: ExistUser.id,
      }
    })
    revalidatePath("/")
    return { success: true, message: "successfull created" }
  } catch (error) {
    console.error("Error creating post  ", error)
    throw new Error(error instanceof Error ? error.message : 'Unknown error occurred while fetching blogs')
  }
}

export async function getBlogByTitle(title: string, limit=10) {
  if (!title) {
    return { message: "please title", success: false }
  }
  try {
    const blogType = await prisma.blog.findMany({
      where: {
        title: {
          equals: title,
          mode: 'insensitive',
        },

      },
      take:limit
    })
    if (blogType) {
      return { success: true, message: "please title", data: blogType }
    } else {
      return { success: false, message: "This type of Title is not found", data: null }
    }

  } catch (error) {
    console.log(error)
    return { success: false, error }
  }
}

