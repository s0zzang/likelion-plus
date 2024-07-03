// 인터섹션 타입(intersection type)

(() => {
  type Todo = {
    title: string;
    content: string;
  };
  type TodoInfo = Todo & {
    id: number;
    done: boolean;
  };

  const todo1: Todo = {
    title: "소화시키기",
    content: "넘 배부르잔아",
  };
  const todoInfo: TodoInfo = {
    id: 0,
    done: false,
    title: "앞구르기",
    content: "희선님 시키기",
  };

  console.log(todo1, todoInfo);
})();
