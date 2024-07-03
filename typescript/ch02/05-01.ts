// echo 함수 - 일반 함수

(() => {
  // FIXME: 오버로드 단원
  //   function echo(msg: string): string {
  //     return msg;
  //   }
  //   function echo(msg: number): number {
  //     return msg;
  //   }
  //   function echo(msg: boolean): boolean {
  //     return msg;
  //   }

  //   console.log(echo("문잔디"));
  //   console.log(echo(1));
  //   console.log(echo(true));

  function echoString(msg: string): string {
    return msg;
  }
  function echoNumber(msg: number): number {
    return msg;
  }
  function echoBoolean(msg: boolean): boolean {
    return msg;
  }

  console.log(echoString("문잔디"));
  console.log(echoNumber(1));
  console.log(echoBoolean(true));
})();
