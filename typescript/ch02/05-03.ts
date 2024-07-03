// echo 함수 - 제네릭 타입 제약
// 05-02.ts 복사

(() => {
  function echo<T extends string | boolean>(msg: T) {
    return msg;
  }

  console.log(echo<string>("문잔디")); // echo<string>(msg: string): string
  //   console.log(echo<number>(300)); // echo<number>(msg: number): number
  console.log(echo(false)); // echo<false>(msg: false): false

  const str = echo<string>("World");
  //   const num = echo<number>(3000);
  console.log(str.toLocaleLowerCase());

  function echo2<T extends { length: number }>(msg: T): T {
    console.log(msg.length);
    return msg;
  }
  //   console.log(echo2(undefined));
  console.log(echo2("undefined"));
})();
