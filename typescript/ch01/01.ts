// 개발 환경 확인

(() => {
  // 즉시 실행 함수 사용 이유 : 지역 변수 스코프 사용하려고
  function hello(name: string) {
    return "hello " + name;
  }
  console.log(hello("메롱"));
  console.log(hello("100000"));
})();
