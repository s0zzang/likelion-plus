// 유니언 타입에 타입 별칭 지정

(() => {
  type Message = string | number;

  function log(msg: Message) {
    return msg;
  }

  const result1 = log("asdf");
  const result2 = log(123);

  console.log(result1);
  console.log(result2);
})();
