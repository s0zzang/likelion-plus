/* ---------------------------------------------------------------- */
/*                            속성 값으로 체크                          */
/* ---------------------------------------------------------------- */

(() => {
  interface User {
    name: string;
    age: number;
    admin: false; // 📍 여길 리터럴 타입으로 작성해야만, 속성값으로 체크 가능
  }
  interface AdminUser {
    name: string;
    admin: true;
    level: 1 | 2 | 3; // literal 타입으로 상세하게 타입 설정
  }

  const user1: User = {
    name: "짜장",
    age: 300,
    admin: false,
  };
  const user2: AdminUser = {
    name: "뽀송",
    admin: true,
    level: 1,
  };

  /* ----- 📍 user: User | AdminUser로 구분되어 user.level 타입 오류 발생 ----- */
  // 타스 컴파일러는 true, false로 User, AdminUser 구분 불가
  function helloUser(user: User | AdminUser) {
    if (user.admin)
      console.log(`'${user.name}' 관리자(레벨: ${user.level})님 환영합니다.`);
    else console.log(`'${user.name}' 님 환영합니다.`);
  }

  helloUser(user1);
  helloUser(user2);
})();
