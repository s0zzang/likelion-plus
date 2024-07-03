/* ---------------------------------------------------------------- */
/*                 Omit 유틸리티 타입 - 외부 파일에 type 정의               */
/* ---------------------------------------------------------------- */
import { Todo } from "./types";

(() => {
  type TodoRegist = Pick<Todo, "title" | "content">;
  type TodoList = Omit<Todo, "id" | "createdAt" | "updatedAt">;

  const todo1: TodoRegist = {
    title: "픽미픽미",
    content: "픽미업",
  };
  const todo2: TodoList = {
    subject: 0,
    title: "잠깨기",
    content: "찬물마셔",
    done: false,
  };

  console.log(todo1, todo2);
})();
