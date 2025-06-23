'use server'
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
import { revalidatePath } from "next/cache";
const JWT_SECRET = process.env.JWT_SECRET || '123westwds55434n:kygc?'
export async function createUser(formData: FormData) {
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get('confirmPassword') as string
    if (password !== confirmPassword) {
        return { success: false, message: "Password confirm is not match with password" }
    }
    if (!email) {
        return { success: false, message: "Email is required" }
    }
    const emailExist = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if (emailExist) {
        return { success: false, message: "This email already exist " }
    }
    try {
        const user = prisma.user.create({
            data: { email, username, password }
        })
        if ((await user).email && (await user).password) {
            revalidatePath("/")
            return { success: true, message: "register success full" }
        }
    } catch (error) {
        console.error("Error creating user  ", error)
        throw new Error("rror creating user")
    }
}

export async function getUsers() {
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
        return users
    } catch (error) {
        console.error("Error fetching users ", error)
        throw new Error("Failed to fetch users")
    }
}

export async function deleteUser(id: string): Promise<{ success: boolean, message: string }> {
    try {
        await prisma.user.delete({
            where: {
                id: id
            }
        })
        revalidatePath("/register")
        return { success: true, message: "delete user" }
    } catch (error) {
        console.error("Error fetching users ", error)
        throw new Error("Failed to fetch users")
    }
}

export async function getUser(id: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Failed to fetch user");
    }
}

export async function updateUser(id:string ,formData:FormData) {

     const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get('confirmPassword') as string
    if(!id){
 return { success: false, message: "ID not null please correct" }
    }
    if (password !== confirmPassword) {
        return { success: false, message: "Password confirm is not match with password" }
    }
    try {
         await prisma.user.update({
          where :{id},
          data:{
            email,
            username,
            password
          }
        })
          revalidatePath('/register');

    return { success: true, message: 'User updated successfully' };

    } catch (error) {
        console.error("Error Update user:", error);
        throw new Error("Failed to update user");
    }
}

export async function SignIn(formData:FormData) {
    try {
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();


    if (!email || !password) {
      return { success: false, message: "Email and password are required." };
    }
     if (email !== 'admin@example.com' || password !== 'admin123') {
      return { success: false, message: 'Invalid credentials' }
    }
    const token = jwt.sign({ email }, JWT_SECRET, {
      expiresIn: '1h'
    })
     ;(await cookies()).set('token', token, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 60 * 60 // 1 hour
    })
        return {success:true, message:"login successfull"}
    } catch (error) {
        console.error("Error login user:", error);
        throw new Error("Failed to login user");
    }
    
}