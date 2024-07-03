// 인터페이스 사용 - 변수, 함수의 매개변수, 리턴타입
// 09.ts 복사

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

  console.log(u1.name, u2.name);

  const createUser = (name: string, age: number) => ({ name, age });
  const getAge = (Lee: UserData) => `${Lee.name}은 ${Lee.age}살 입니다.`;

  console.log(createUser("짜장", 300));
  getAge(u2);

  const u3 = createUser("초콜릿", 3);
  console.log(u3, getAge(u3));
})();
