// 인터페이스로 객체의 타입 선언
// 07.ts 복사

(() => {
  interface UserData {
    name: string;
    age: number;
  }

  const u1: UserData = {
    name: "짜장이",
    age: 1000,
  };
  const u2: UserData = {
    name: "용쌤",
    age: 10000,
  };
  const u3: UserData = {
    name: "범쌤",
    age: 100000,
  };
})();
