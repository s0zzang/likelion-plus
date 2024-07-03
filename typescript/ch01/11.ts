// 인터페이스 사용 - 클래스의 타입 지정

(() => {
  //   class HighSchool {
  //     constructor(kor, eng) {
  //       this.kor = kor;
  //       this.eng = eng;
  //     }
  //     sum() {
  //       return this.kor + this.eng;
  //     }
  //     avg() {
  //       return this.sum() / 2;
  //     }
  //   }

  interface Score {
    kor: number;
    eng: number;
    sum(kor: number, eng: number): number;
    avg(kor: number, eng: number): number;
  }

  class HighSchool implements Score {
    kor: number;
    eng: number;

    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }
    sum() {
      return this.kor + this.eng;
    }
    avg() {
      return this.sum() / 2;
    }
  }

  const muzi = new HighSchool(100, 40);
  console.log(muzi.sum(), muzi.avg());
})();
