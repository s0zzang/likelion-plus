// 기본 타입

(() => {
  let str = "merong"; // 타입 추론 (객체, 함수 외의 변수는 추론이 가능함)
  //   let str: string = "hello";

  // 선언, 타입 지정, 할당 따로
  let age: number = 2920;
  let done: boolean; // 선언
  done = true; // 할당

  // 타입 지정 안한 경우
  let done2; // 타입 : any (추론할 근거가 없기 때문에)
  done2 = true;
  done2 = 1999;

  // object, array
  let todo: object = { title: "점심 먹기", done: false };
  let todoList: Array<string> = ["도시락 싸오기", "메롱하기"];
  let todoList2: string[] = ["도시락 싸오기", "메롱하기"]; // 더 많이 사용됨

  // 튜플
  let items: [string, number] = ["용쌤", 300];
  let userName: any = "이일구";
  userName = 222; // 비추

  // null, undefined
  let nullVal: null = null;
  let emptyVal: undefined = undefined;
})();
