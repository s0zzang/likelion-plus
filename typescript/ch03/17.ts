/* ---------------------------------------------------------------- */
/*                              함수 호환                             */
/* ---------------------------------------------------------------- */

import { Todo } from "./types";

(() => {
  type TodoRegist = Pick<Todo, "title" | "content">;
  type TodoList = Pick<Todo, "id" | "title" | "done" | "content">;

  const todo1: TodoRegist = {
    title: "픽미픽미",
    content: "픽미업",
  };
  const todo2: TodoList = {
    id: 0,
    title: "잠깨기",
    done: true,
    content: "완.",
  };

  function toString(todo: TodoRegist) {
    return `[TodoRegist] title: ${todo.title}, content: ${todo.content}`;
  }

  console.log(toString(todo1));
  // ⭕️ todo2 : id, title, done, content 이지만 TodoRegist의 타입을 모두 가지고 있기 때문에 호환이 가능함
  console.log(toString(todo2));
  // ❌ 개체 리터럴은 알려진 속성만 지정 가능한 ;
  // console.log(toString({ id: 0, title: "잠깨기", done: true, content: "완." }));
})();
