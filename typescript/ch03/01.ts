/* ---------------------------------------------------------------- */
/*                       Readonly 유틸리티 타입                         */
/* ---------------------------------------------------------------- */

(() => {
  interface Todo {
    title: string;
    content: string;
  }

  const todo1: Todo = {
    title: "할일 1",
    content: "내용 1",
  };
  console.log(todo1);

  // 0️⃣ 직접 readonly 버전의 interface 생성
  // interface ReadonlyTodo {
  //   readonly title: string;
  //   readonly content: string;
  // }

  // 1️⃣ 인터페이스로 정의
  // interface ReadonlyTodo extends Readonly<Todo> {}

  // 2️⃣ 타입 별칭으로 정의
  type ReadonlyTodo = Readonly<Todo>;

  /* ------------- 📍 readonly 버전의 타입을 생성하여 타입 지정 : 여러번 사용 ------------- */
  const todo2: ReadonlyTodo = {
    title: "할일 2",
    content: "내용 2",
  };
  console.log(todo2);
  // todo3.title = '수정'; // error

  /* -------------- 📍 즉석으로 객체 생성시 readonly 속성 지정 : 한 번 사용 ------------- */
  const todo3: Readonly<Todo> = {
    title: "할일 3",
    content: "내용 3",
  };
  console.log(todo3);
  // todo3.title = '수정'; // error
})();
