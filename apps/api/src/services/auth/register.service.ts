import { hashpassword } from "@/lib/bcrypt";
import prisma from "@/prisma";
import { User } from "@prisma/client";

export const registerService = async (body: Omit<User, "id">) => {
    try {
        const { username, email, password } = body;

        const existingUser = await prisma.user.findFirst({
            where: {
                AND: [{ username }, { email }],
            }
        })
        if (existingUser) {
            if (existingUser.email === email) {
                throw new Error("email already exist")
            } else if (existingUser.username === username) {
                throw new Error("username already exist")
            }
        }
        const hashedpassword = await hashpassword(password);
        const newUser = await prisma.user.create({
            data: {
                ...body,
                password: hashedpassword,
            }
        })
        return ({
            message: "register Success",
            data: newUser,
        })

    } catch (error) {
        throw error
    }
}