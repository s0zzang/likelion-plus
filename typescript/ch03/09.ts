/* ---------------------------------------------------------------- */
/*                               타입 단언                            */
/* ---------------------------------------------------------------- */

(() => {
  function getMsg(msg) {
    return msg;
  }

  /* ---------------------------- 📍 any ---------------------------- */
  // 메서드 호출 가능
  const msg1 = getMsg(12.332);
  console.log(msg1.toFixed(2));

  /* ------------------------- 📍 number로 단언 ------------------------ */
  // 메서드 자동 완성 가능
  const msg2 = getMsg(12.332) as number;
  console.log(msg2.toFixed(2));

  /* ----------------------- 📍 권장되는 방법 : 제네릭 ----------------------- */
  function getMessage<T>(msg: T) {
    return msg;
  }
  const msg3 = getMessage<string>("이거쥐");
  console.log(msg3.repeat(2));
})();
