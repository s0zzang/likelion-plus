/* ---------------------------------------------------------------- */
/*                      10-01.js 리팩토링 : 타입 단언                    */
/* ---------------------------------------------------------------- */
// TODO: JS로 작성된 코드를 TS로 리팩토링. 로직은 수정하지 말고 타입만 추가 정의
// 10-01.js 복사

(() => {
  interface Todo {
    title: string;
    content: string;
  }

  const todo1 = {} as Todo;
  todo1.title = "점심 뭐먹지";

  const todo2 = { title: "집에 언제가지" } as Todo;
  todo2.content = "못가";

  const todo3 = {
    title: "자고싶은데요",
    content: " 못자",
  };

  const todo4 = {
    title: "타스 잼있다",
    content: "거짓말 아니에요",
  };

  console.log(todo1, todo2, todo3, todo4);
})();
