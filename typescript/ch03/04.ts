/* ---------------------------------------------------------------- */
/*                           Pick 유틸리티 타입                         */
/* ---------------------------------------------------------------- */

import { Todo } from "./types";
import { User } from "./types/user";

// export interface Todo {
//   id: number;
//   subject: number;
//   title: string;
//   content: string;
//   done: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

(() => {
  type TodoRegist = Pick<Todo, "title" | "content">;
  type TodoList = Pick<Todo, "id" | "title" | "done">;

  const todo1: TodoRegist = {
    title: "픽미픽미",
    content: "픽미업",
  };
  const todo2: TodoList = {
    id: 0,
    title: "잠깨기",
    done: false,
  };
  const user: User = {
    name: "짜장",
    id: 0,
  };

  console.log(todo1, todo2, user);
})();
