'use server'
import prisma from "@/lib/prisma";
import { Role } from "@/lib/generated/prisma";
import { generateToken } from "@/utils/validatorToken";
import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache";

export async function createUser(formData: FormData) {
    const username = formData.get("username")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const image = formData.get('image')?.toString()
    const confirmPassword = formData.get('confirmPassword')?.toString()
    console.log(image)
    if (!email || !password || !confirmPassword) {
        return { success: false, message: "All fields are required." }
    }
    if (password !== confirmPassword) {
        return { success: false, message: "Password confirm is not match with password" }
    }

    try {
        const emailExists = await prisma.user.findUnique({ where: { email } })
        if (emailExists) {
            return { success: false, message: "Email already exists." }
        }

        const hashedPasssword = await bcrypt.hash(password, 10)
        let role: Role = Role.USER;
        let permission = false;

        const userCount = await prisma.user.count();
        if (userCount === 0) {
            role = Role.ADMIN;
            permission = true;
        }
        await prisma.user.create({
            data: { email, username, image, password: hashedPasssword, role, permission }
        })
        revalidatePath("/")
        return { success: true, message: "Registration successful" }
    } catch (error) {
        console.error("Error creating user:", error)
        return { success: false, message: "Failed to create user." }
    }
}

export async function getUsers() {
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: "desc"
            },
            select: {
                id: true,
                email: true,
                username: true,
                image: true,
                role: true,
                permission: true,
                password:false,
                createdAt: true,
                updatedAt: true,
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

export async function updateUser(id: string, formData: FormData) {

    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get('confirmPassword') as string

    if (!id) {
        return { success: false, message: "ID not null please correct" }
    }
    if (password !== confirmPassword) {
        return { success: false, message: "Password confirm is not match with password" }
    }
    let role: Role = Role.USER;
    let permission = false;

    const userCount = await prisma.user.count();
    if (userCount === 0) {
        role = Role.ADMIN;
        permission = true;
    }
    try {
        await prisma.user.update({
            where: { id },
            data: {
                email,
                username,
                password,
                role,
                permission
            }
        })
        revalidatePath('/register');

        return { success: true, message: 'User updated successfully' };

    } catch (error) {
        console.error("Error Update user:", error);
        throw new Error("Failed to update user");
    }
}

export async function SignIn(formData: FormData) {
    try {
        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();

        if (!email || !password) {
            return { success: false, message: "Email and password are required." }
        }

        const existUser = await prisma.user.findUnique({ where: { email } })

        if (!existUser) {
            return { success: false, message: "User not found." }
        }

        const isPasswordCorrect = await bcrypt.compare(password, existUser.password)

        if (!isPasswordCorrect) {
            return { success: false, message: "Invalid credentials." }
        }
        revalidatePath('/')
        await generateToken({ email: existUser.email, id: existUser.id, image: existUser.image || '' , role:existUser.role})

        return { success: true, message: "Login successful", data: { email: existUser.email, id: existUser.id, image: existUser.image || '', role:existUser.role } }

    } catch (error) {
        console.error("Error logging in user:", error)
        return { success: false, message: "Login failed due to a server error." }
    }

}