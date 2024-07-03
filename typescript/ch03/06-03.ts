/* ---------------------------------------------------------------- */
/*                        Mapped 타입 - 매핑 수정자                     */
/* ---------------------------------------------------------------- */

(() => {
  interface Todo {
    id: number;
    title: string;
    content: string;
  }

  /* ------------------------ 📍 유틸리티 타입 활용 -------------------------- */
  //   type ReadonlyTodo = Readonly<Todo>; // 읽기 전용
  //   type PartialTodo = Partial<Todo>; // 옵셔널

  /* ------------------------- 📍 매핑 수정자 활용 ------------------------- */
  //   type ReadonlyTodo = {
  //     readonly [key in keyof Todo]: string;
  //   };
  //   type PartialTodo = {
  //     [key in keyof Todo]?: Todo[key];
  //   };

  /* --------------------------- 📍 제네릭 활용 -------------------------- */
  type MyPartial<T> = {
    [key in keyof T]?: T[key];
  };

  const todo1: MyPartial<Todo> = {
    id: 3,
    title: "할일 1",
    content: "내용 1",
  };
  //   todo1.title = "수정";
  console.log(todo1);
})();
