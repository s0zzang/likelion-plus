// 인터페이스 선언 병합
// 16.ts 복사

(() => {
  interface Todo {
    title: string;
    content: string;
  }

  interface Todo {
    id: number;
    title: string; // 병합시 기존 속성의 타입과 다르면 안됨
    done: boolean;
  }

  const todo3: Todo = {
    id: 0,
    title: "끝내주세요?",
    content: "타입스크립트??",
    done: false,
  };

  console.log(todo3);
})();
