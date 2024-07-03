// 인터페이스 상속

(() => {
  interface Todo {
    title: string;
    content: string;
  }

  interface TodoInfo extends Todo {
    id: number;
    done: boolean;
  }

  const todo1: Todo = {
    title: "quick 뭐시기 좋다",
    content: "자주 애용할게요?",
  };
  const todo2: TodoInfo = {
    id: 0,
    title: "끝내주세요?",
    content: "타입스크립트??",
    done: false,
  };

  console.log(todo1, todo2);
})();
