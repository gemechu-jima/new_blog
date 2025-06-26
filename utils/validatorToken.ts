'use server'
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
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

export const clearToken=async()=>{
 ( await cookies()).delete('token')
}