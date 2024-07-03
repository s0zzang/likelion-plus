// 타입 별칭으로 객체의 타입 선언

(() => {
  type UserData = {
    name: string;
    age: number;
  };

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

  console.log(u1.name);
  console.log(u2.name);
  console.log(u3.name);
})();
