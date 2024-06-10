import { TodoController } from '@/controllers/todo.controller';
import { Router } from 'express';

export class TodoRouter {
  private router: Router;
  private todoController: TodoController;

  constructor() {
    this.todoController = new TodoController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.todoController.getTodosController);
    this.router.get('/:id', this.todoController.getTodoController);
    this.router.post('/', this.todoController.createTodoController);
    this.router.patch('/:id', this.todoController.updateTodoController);
    this.router.delete('/:id', this.todoController.deleteTodoController);
  }

  getRouter(): Router {
    return this.router;
  }
}
