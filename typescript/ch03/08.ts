/* ---------------------------------------------------------------- */
/*                             함수의 타입 추론                         */
/* ---------------------------------------------------------------- */

(() => {
  // 선언 당시엔, num에 어떤 값이 넘어올지 모르기 때문에 추론 불가능
  // 매개변수의 타입을 지정하지 않으면, 매개변수, 리턴값 추론 불가
  function add10(num) {
    return num + 10;
  }

  function add20(num = 20) {
    return num + 10;
  }

  console.log(add10(100));
  console.log(add20(0));

  function checkNumber(x: number, y: number) {
    // let z;
    if (x === 10) return "x는 10"; // returalValue: "x는 10" | undefined
    else if (x > y) return `큰 수는 ${x}`; // returalValue: string | undefined
    else if (x > 5) return 5; // returalValue: string | 5 | undefined
  }

  const returalValue = checkNumber(10, 30);
  console.log(returalValue);
})();
