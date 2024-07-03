// 인터페이스 정의 - 객체의 속성과 메서드, 익명 함수, 선택적 속성, 읽기 전용 속성

(() => {
  interface ITodo {
    readonly id: number;
    title: string;
    content: string;
    done?: boolean;
  }
  interface IToggle {
    (todo: ITodo): void;
  }

  const todo1: ITodo = {
    id: 0,
    title: "졸려버요",
    content: "잠깨기",
    done: false,
  };
  const todo2: ITodo = {
    id: 1,
    title: "졸려버요?",
    content: "잠깨기!!",
  };

  console.log(todo1, todo2);
  todo1.title = "곧 쉬는시간";
  //   todo1.id = 3;
  console.log(todo1, todo2);

  // done toggle
  const toggleDone: IToggle = (todo) => {
    todo.done = !todo.done;
  };

  toggleDone(todo1);
  toggleDone(todo2);
  console.log(todo1, todo2);
})();
