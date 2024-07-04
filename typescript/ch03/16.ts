/* ---------------------------------------------------------------- */
/*                         타입 가드 함수 작성                           */
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
    level: 1 | 2 | 3;
  }
  interface GuestUser {
    name: "게스트";
    age: 0;
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
  const user3: GuestUser = {
    name: "게스트",
    age: 0,
  };

  function helloUser(user: User | AdminUser | GuestUser) {
    if ("admin" in user) {
      if (user.admin) console.log(`'${user.name}' 관리자님 환영합니다.`);
      else console.log(`${user.age}살이나 되신 '${user.name}' 님 환영합니다.`);
    } else console.log(`'${user.name}' 님 환영합니다.`);
  }

  /* --------------------- 📍 && 연산자 활용하여 타입 가드 --------------------- */
  function helloUser2(user: User | AdminUser | GuestUser) {
    if ("admin" in user && user.admin)
      console.log(`'${user.name}' 관리자님 환영합니다.`);
    else console.log(`'${user.name}' 님 환영합니다.`);
  }

  /* ----------- 📍 타입 가드 함수 : 타입 가드 구문이 복잡하고 여러 번 사용하는 경우 ---------- */
  // (★) user is AdminUser: true를 리턴하면 user를 AdminUser로 판별, 아니라면 그대로
  function isAdmin(user: User | AdminUser | GuestUser): user is AdminUser {
    return "admin" in user && user.admin;
  }

  /* ------------------------ 📍 타입 가드 함수 사용 ------------------------ */
  function helloUser3(user: User | AdminUser | GuestUser) {
    if (isAdmin(user))
      console.log(`'${user.name}' 관리자(레벨: ${user.level})님 환영합니다.`);
    else console.log(`'${user.name}' 님 환영합니다.`);
  }

  helloUser(user1);
  helloUser(user2);
  helloUser(user3);

  helloUser2(user1);
  helloUser2(user2);
  helloUser2(user3);

  helloUser3(user1);
  helloUser3(user2);
  helloUser3(user3);
})();
