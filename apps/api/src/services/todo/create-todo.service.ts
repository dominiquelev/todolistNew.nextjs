import prisma from "@/prisma"
import { Todo } from "@prisma/client"

interface createTodoBody extends Omit<Todo, 'id' | 'createdAt' | 'updatedAt' | 'userId'> {
    userId: string
}


export const createTodoService = async (body: createTodoBody) => {
    try {
        const { title, isCompleted, category, time, start_date, userId } = body

        const user = await prisma.user.findFirst({
            where: { id: Number(userId) },
        })
        if (!user) {
            throw new Error('user is not found')
        }
        const createTodo = await prisma.todo.create({
            data: { ...body, userId: Number(userId) },

        })
        return createTodo;

    } catch (error) {
        throw error
    }
}