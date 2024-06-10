import prisma from "@/prisma"

export const getTodosService = async () => {
    try {
        const todos = await prisma.todo.findMany();
        return todos;
    } catch (error) {
        throw error
    }
}