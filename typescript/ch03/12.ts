/* ---------------------------------------------------------------- */
/*                            typeof 연산자                           */
/* ---------------------------------------------------------------- */

(() => {
  console.log(typeof 10);
  console.log(typeof "10");
  console.log(typeof true);
  console.log(typeof new Function());
  console.log(typeof function () {});
  console.log(typeof undefined);
  //   console.log(typeof BigInt(Number.MAX_VALUE));
  console.log(typeof Symbol("hello"));
  console.log(typeof null);
  console.log(typeof {});
  console.log(typeof new Date());
  console.log(typeof new RegExp(""));
  console.log(typeof new Array([]));
  console.log(typeof []);

  //   function print(msg: string | number | string[] | Date) {
  function print(msg: string | number | string[]) {
    if (typeof msg === "string" || typeof msg === "object")
      console.log(msg, msg.length);
    else if (typeof msg === "number") console.log(msg.toFixed());
  }

  print("목요일");
  print(444);
  print(["돈까스", "떡갈비"]);
})();
