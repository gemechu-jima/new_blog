'use server'
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import { revalidatePath } from "next/cache";
import { Role } from "@/lib/generated/prisma";
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

export const validatorToken=async()=>{
    const token = (await cookies()).get('token')?.value
    let user: any = null

  if (token) {
    try {
      user = jwt.verify(token, JWT_SECRET)
      return user
    } catch (err) {
        console.error("Invalid token:", err);
        return null;

    }
  }
}

export const generateToken=async({email, id, image, role}:{email:string, id:string, image:string, role:Role})=>{
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables.')
  }
 const token = jwt.sign(
            { email, id , image, role},
            JWT_SECRET,
            { expiresIn: '1h' }
        )
        const cookieStore=await cookies()
        cookieStore.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 
        })
}
export const clearToken=async()=>{
 ( await cookies()).delete('token')
}