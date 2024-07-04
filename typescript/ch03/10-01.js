/* ---------------------------------------------------------------- */
/*                        타입 단언이 필요한 JS 코드                      */
/* ---------------------------------------------------------------- */

(() => {
  const todo1 = {};
  todo1.title = "점심 뭐먹지";

  const todo2 = { title: "집에 언제가지" };
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
