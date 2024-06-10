import { createTodoService } from "@/services/todo/create-todo.service";
import { deleteTodoService } from "@/services/todo/delete-todo.service";
import { getTodoService } from "@/services/todo/get-todo.service";
import { getTodosService } from "@/services/todo/get-todos.service";
import { updateTodoService } from "@/services/todo/update-todo.service";
import { Request, Response } from "express";


export class TodoController {
    async getTodosController(req: Request, res: Response) {
        const result = await getTodosService();

        return res.status(201).send(result);
    }

    async getTodoController(req: Request, res: Response) {
        const { id } = req.params;

        const result = await getTodoService(Number(id));



        return res.status(200).send(result);
    }

    async createTodoController(req: Request, res: Response,) {

        const result = await createTodoService(req.body);


        return res.status(201).send(result);
    }
    async updateTodoController(req: Request, res: Response,) {
        const id = Number(req.params.id)

        const result = await updateTodoService(id, req.body);


        return res.status(201).send(result);
    }
    async deleteTodoController(req: Request, res: Response,) {
        const id = Number(req.params.id)

        const result = await deleteTodoService(id);


        return res.status(201).send(result);
    }
}
