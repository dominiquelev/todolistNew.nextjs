import prisma from "@/prisma"
export const getTodoService = async (id: number) => {
  try {
    const todo = await prisma.todo.findFirst({
      where: { id },

    }
    );
    if (!todo) {
      throw new Error("todo is not found")
    }

    return todo;
  } catch (error) {
    throw error;
  }
};
