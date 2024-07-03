// 클래스 정의 - private class fields
// 점수는 수정 불가하고 평균은 avg() 메서드만 사용
// 01-01.js 복사

(() => {
  class HighSchool {
    #kor;
    #eng;
    constructor(kor, eng) {
      this.#kor = kor;
      this.#eng = eng;
    }
    #sum() {
      return this.#kor + this.#eng;
    }
    avg() {
      return Math.round(this.#sum() / 2);
    }
  }

  const s1 = new HighSchool(100, 93);
  console.log("합계", s1.sum());
  console.log("평균", s1.avg());
})();
