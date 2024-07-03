// 함수에 타입 지정

(() => {
  function getCount(count: number): string {
    return "count : " + count;
  }
  const result = getCount(3);
  //   const result2 = getCount("2342424");
  console.log(result);
})();
