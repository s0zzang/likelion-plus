export interface Todo {
  id: number;
  subject: number;
  title: string;
  content: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type TodoInfo = Omit<Todo, "createdAt">;
export type TodoList = Omit<Todo, "content">;
export type TodoRegist = Pick<Todo, "title" | "content">;
