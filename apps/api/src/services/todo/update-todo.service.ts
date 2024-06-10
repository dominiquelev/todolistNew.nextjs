import prisma from "@/prisma"
import { Todo } from "@prisma/client"

interface todoUpdateBody extends Omit<Todo, 'userId'> {
    userId: string,
}

export const updateTodoService = async (id: number, body: todoUpdateBody) => {
    try {

        const todo = await prisma.todo.findFirst({
            where: { id, userId: Number(body.userId) },

        })

        if (!todo) {
            throw new Error("todo is not found")
        }

        const updateTodo = await prisma.todo.update({
            where: { id: todo?.id },
            data: { ...body, userId: Number(body.userId) }
        })

        return updateTodo;

    } catch (error) {
        throw error
    }
}