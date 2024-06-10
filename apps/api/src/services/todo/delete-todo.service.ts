import prisma from "@/prisma"

export const deleteTodoService = async (id: number) => {
    try {
        const todo = await prisma.todo.findFirst({
            where: { id },
            include: { user: true }
        })
        if (!todo) {
            throw new Error('todo is not found')
        }
        const deleteTodo = await prisma.todo.delete({
            where: { id }
        })
        return {
            message: 'delete success',
            data: { deleteTodo },
        }
    } catch (error) {
        throw error
    }
}