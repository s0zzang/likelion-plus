// 클래스 정의 - private 접근 지정자
// 점수는 수정 불가하고 평균은 avg() 메서드만 사용
// 02-01.ts 복사

(() => {
  interface IHighSchool {
    // kor: number;
    // eng: number;
    // sum(): number;
    avg(): number;
  }

  class HighSchool implements IHighSchool {
    private kor: number;
    private eng: number;

    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }
    private sum(): number {
      return this.kor + this.eng;
    }
    avg(): number {
      return Math.round(this.sum() / 2);
    }
  }

  const s1 = new HighSchool(100, 70);
  console.log(s1, s1.avg());
})();
