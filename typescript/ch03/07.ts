/* eslint-disable @typescript-eslint/no-unused-vars */
/* ---------------------------------------------------------------- */
/*                          변수와 객체의 타입 추론                       */
/* ---------------------------------------------------------------- */

(() => {
  interface Todo {
    title: string;
    content: string;
  }

  // 기본 데이터 타입의 변수 타입 추론
  const name = "짜장이"; // name: "짜장이" (string literal)
  const age = 25;

  // 기본 데이터 타입의 변수 타입을 명시적 지정
  let address: string;

  // 객체 : 속성값에 맞춰서 타입 추론
  const todo1: Todo = {
    title: "할일 1",
    content: "내용 1",
  };
  const todo2: Todo = {
    title: "할일 2",
    content: "This is 내용 2",
  };

  function printTodo(todo: Todo) {
    console.log(todo.title, todo.content.toLowerCase());
  }

  printTodo(todo1);
  printTodo(todo2);
})();
