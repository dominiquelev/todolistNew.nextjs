import { User } from './user.type';

export interface Todo {
  id: number;
  userId: number;
  title: string;
  isCompleted: string;
  category: string;
  time: string;
  start_date: Date;
  createdAt: Date;
  updatedAt: Date;

  user: User;
}

export interface IFormCreateTodo {
  title: string;
//   isCompleted: string;
  category: string;
  time: string;
  start_date: Date;
  userId?: number;
}
