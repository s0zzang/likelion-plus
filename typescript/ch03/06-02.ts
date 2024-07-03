/* ---------------------------------------------------------------- */
/*        Mapped 타입 - 객체 타입을 기반으로 객체 타입 생성(in keyof)         */
/* ---------------------------------------------------------------- */

(() => {
  //   type UserField = "id" | "name" | "address" | "phone";
  //   type User = {
  //     [key in UserField]: string;
  //   };
  type User = {
    id: string;
    name: string;
    address: string;
    phone: string;
  };

  // keyof : 객체로 정의된 모든 타입의 속성을 유니언 타입으로 반환
  type UserField = keyof User;
  type OptionalUser = {
    [key in UserField]?: string;
  };
  type RequiredUser = {
    [key in keyof OptionalUser]-?: string;
  };
  type ReadonlyUser = {
    readonly [key in keyof User]: string;
  };

  const ryan: User = {
    id: "0",
    name: "롸언",
    address: "롯데월드",
    phone: "010",
  };
  const neo: OptionalUser = {
    id: "0",
    name: "눼",
  };
  const neo2: RequiredUser = {
    id: "0",
    name: "눼",
    address: "",
    phone: "",
  };
  const neo3: ReadonlyUser = {
    id: "0",
    name: "눼",
    address: "",
    phone: "",
  };

  console.log(ryan, neo, neo2, neo3);
})();
