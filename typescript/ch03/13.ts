/* ---------------------------------------------------------------- */
/*                          instanceof 연산자                         */
/* ---------------------------------------------------------------- */

(() => {
  // typeof로는 불가능 했었던 일 ..
  function print(msg: string | number | string[] | Date) {
    if (typeof msg === "string" || msg instanceof Array)
      console.log(msg, msg.length);
    else if (typeof msg === "number") console.log(msg.toFixed());
  }

  print("목요일");
  print(444);
  print(["돈까스", "떡갈비"]);

  /* ----------------------- 📍 instanceof 예시 ----------------------- */
  console.log(new Date() instanceof Date);
  console.log(new Array([]) instanceof Array);
  console.log(new RegExp("") instanceof RegExp);
  console.log([] instanceof Array);
  console.log(/'h'/ instanceof RegExp);
  console.log({} instanceof Object);
  console.log(new Object() instanceof Object);
  console.log(new Array([]) instanceof Object);
  console.log(/''/ instanceof Object);
  console.log(new XMLHttpRequest() instanceof XMLHttpRequest);
  console.log(new XMLHttpRequest() instanceof Object);
  console.log(document.querySelector("div") instanceof Element);
  console.log(document.querySelector("a") instanceof HTMLElement);

  /* -------------------------- 📍 class 예시 ------------------------- */
  interface ITodo {
    title: string;
    content: string;
  }
  class Todo implements ITodo {
    title: string;
    content: string;
    constructor(title: string, content: string) {
      (this.title = title), (this.content = content);
    }
    cry() {
      console.log("야옹");
    }
  }

  // 생성자 함수인 Todo를 매개변수 타입으로 설정 : Todo가 ITodo를 상속받았기 때문에 가능
  // 다만
  function getTitle(target: Todo | string[]) {
    if (target instanceof Todo) return target.title;
    return target[0];
  }

  const todo1: Todo = new Todo("타스", "너 이럴래?"); // todo1.title
  // const todo1_2: ITodo = new Todo("타스", "너 이럴래?"); // todo1.title
  const todo2: [string, string] = ["자스", "그리버요"]; // todo2[0]

  console.log(getTitle(todo1));
  console.log(getTitle(todo2));
  todo1.cry();
  // todo1_2.cry(); // 'ITodo' 형식에 'cry' 속성이 없습니다.
})();
