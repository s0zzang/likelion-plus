// 선택적 파라미터(optional parameter)

(() => {
  function user(name: string, age?: number) {
    console.log(name, age);
  }
  user("짜장");
  user("짜장이", 100);
  //   user("짜장이", '100'); // 오류
})();
