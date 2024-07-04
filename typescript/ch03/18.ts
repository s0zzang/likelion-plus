/* ---------------------------------------------------------------- */
/*               함수 오버로딩 - 동일한 이름의 함수를 중복으로 정의              */
/* ---------------------------------------------------------------- */

(() => {
  interface TodoRegist {
    title: string;
    content: string;
  }
  interface TodoList {
    id: number;
    title: string;
    done: boolean;
    content: string;
  }

  const todo1: TodoRegist = {
    title: "픽미픽미",
    content: "픽미업",
  };
  const todo2: TodoList = {
    id: 0,
    title: "잠깨기",
    done: true,
    content: "이걸 성공하네",
  };

  /* --------------------- 📍 자스 vs 타스 : 함수 오버로딩 -------------------- */
  // 자바스크립트 : 동일한 함수 정의하면 마지막 함수만 살아남아
  // 타입스크립트 : 중복된 함수는 시그니처 함수(?)가 됨
  function toString(todo: TodoList): string; // 껍데기
  function toString(todo: TodoRegist): string; // 껍데기
  function toString(todo: TodoList | TodoRegist) {
    // 실제 알맹이
    return "id" in todo
      ? `[TodoRegist] id: ${todo.id}, title: ${todo.title}, done: ${todo.done}, content: ${todo.content}`
      : `[TodoList] title: ${todo.title}, content: ${todo.content}`;
  }

  console.log(toString(todo1)); // toString(todo: TodoRegist): string
  console.log(toString(todo2)); // toString(todo: TodoList): string
})();
