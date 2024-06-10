import { Todo } from "./todo.type";

export interface User {
    id: number;
    email: string;
    username: string;
    password: string;

    todo?: Todo;
}