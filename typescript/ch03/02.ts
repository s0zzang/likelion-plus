/* ---------------------------------------------------------------- */
/*                         Required 유틸리티 타입                       */
/* ---------------------------------------------------------------- */

(() => {
  interface Todo {
    title: string;
    content?: string;
  }

  /* ----------------------- 1️⃣ interface로 정의 ---------------------- */
  //   interface RequiredTodo extends Required<Todo>

  /* ------------------------ 2️⃣ 타입 별칭으로 정의 ------------------------ */
  type RequiredTodo = Required<Todo>;

  const todo1: Required<Todo> = {
    title: "할일 1",
    content: "내용 1",
  };

  const todo2: RequiredTodo = {
    title: "할일 2",
    content: "내용 2", //  필수 속성으로 없으면 오류 발생
  };

  console.log(todo1, todo2);
})();
