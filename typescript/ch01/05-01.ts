// 유니언 타입(union type)

(() => {
  //유니언 타입 사용 X
  function logString(msg: string) {
    console.log(msg);
  }
  function logNumber(msg: number) {
    console.log(msg);
  }
  logString("dsf");
  logNumber(123);

  //유니언 타입 사용 O
  function log(msg: string | number) {
    if (typeof msg === "string") console.log(msg.toUpperCase());
    if (typeof msg === "number") console.log(msg.toFixed());
  }
  log("asdf");
  log(123);
})();
