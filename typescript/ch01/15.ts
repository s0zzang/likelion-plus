// 인터페이스 상속 - 계층 구조
// 14.ts 복사

(() => {
  interface Todo {
    title: string;
    content: string;
  }

  interface TodoInfo extends Todo {
    id: number;
    done: boolean;
  }

  interface TodoInfoTime extends TodoInfo {
    createdAt: Date;
    updatedAt: Date;
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

  const todo3: TodoInfoTime = {
    id: 0,
    title: "끝내주세요?",
    content: "타입스크립트??",
    done: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  console.log(todo1, todo2, todo3);
})();
