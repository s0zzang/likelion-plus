/* ---------------------------------------------------------------- */
/*            Mapped 타입 - 유니언 타입을 기반으로 객체 타입 생성(in)          */
/* ---------------------------------------------------------------- */

(() => {
  type UserField = "id" | "name" | "address" | "phone";
  type User = {
    [key in UserField]: string;
  };

  const ryan: User = {
    id: "0",
    name: "롸언",
    address: "롯데월드",
    phone: "010",
  };

  console.log(ryan);
})();
