/* ---------------------------------------------------------------- */
/*                              in 연산자                             */
/* ---------------------------------------------------------------- */
// 04.ts 복사

import { Todo } from "./types";

(() => {
  type TodoRegist = Pick<Todo, "title" | "content">;
  type TodoList = Pick<Todo, "id" | "title" | "done" | "updatedAt">;

  const todo1: TodoRegist = {
    title: "픽미픽미",
    content: "픽미업",
  };
  const todo2: TodoList = {
    id: 0,
    title: "잠깨기",
    done: false,
    updatedAt: new Date(),
  };

  function toString(todo: TodoList | TodoRegist) {
    return "id" in todo
      ? `[TodoRegist] id: ${todo.id}, title: ${todo.title}, done: ${todo.done}`
      : `[TodoList] title: ${todo.title}, content: ${todo.content}`;
  }

  console.log(toString(todo1));
  console.log(toString(todo2));
})();
