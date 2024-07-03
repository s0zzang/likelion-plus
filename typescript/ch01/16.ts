// 인터페이스 다중 상속

(() => {
  interface Todo {
    title: string;
    content: string;
  }

  interface TodoList {
    id: number;
    title: string;
    done: boolean;
  }

  interface TodoInfo extends Todo, TodoList {
    createdAt: Date;
    updatedAt: Date;
  }

  const todo1: Todo = {
    title: "quick 뭐시기 좋다",
    content: "자주 애용할게요?",
  };

  const todo2: TodoList = {
    id: 0,
    title: "끝내주세요?",
    done: false,
  };

  const todo3: TodoInfo = {
    id: 0,
    title: "끝내주세요?",
    content: "타입스크립트??",
    done: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  console.log(todo1, todo2, todo3);
})();
