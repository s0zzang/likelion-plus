// echo 함수 - 제네릭 함수

(() => {
  function echo<T>(msg: T) {
    return msg;
  }

  console.log(echo<string>("문잔디")); // echo<string>(msg: string): string
  console.log(echo<number>(300)); // echo<number>(msg: number): number
  console.log(echo(false)); // echo<false>(msg: false): false

  const str = echo<string>("World");
  const num = echo<number>(3000);
  console.log(str.toLocaleLowerCase(), num.toString());
})();
