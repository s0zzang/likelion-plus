// 인덱스 시그니처 - 문자열

(() => {
  interface User {
    name: string;
    email: string;
    address: string;
    age: number;
    // phone?: string;
    // hobby?: string;
    [ect: string]: string | number;
  }

  const ryan: User = {
    name: "라이언",
    email: "ryan@kakao.com",
    age: 100,
    address: "경기도",
    phone: "010",
    hobby: "사천성",
  };

  const muzi: User = {
    name: "무지",
    email: "muzi@kakao.com",
    age: 30,
    address: "제주도",
    hobby: "사천성",
  };

  console.log(ryan, muzi);
})();
