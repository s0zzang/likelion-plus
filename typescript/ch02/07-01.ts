/* ---------------------------------------------------------------- */
/*                        Queue - 일반 클래스                          */
/* ---------------------------------------------------------------- */

(() => {
  /* -------------------------- 1. 문자를 담는 큐 ------------------------- */
  interface Queue {
    data: string[];
    push(item: string): void;
    pop(): void;
  }

  class StringQueue implements Queue {
    data: string[] = [];
    push(item: string) {
      this.data.push(item);
    }
    pop(): string | undefined {
      return this.data.shift();
    }
  }

  const sq = new StringQueue();
  sq.push("hello");
  sq.push("메롱");
  sq.push("열공");
  sq.push("합쉬다");

  const s1 = sq.pop(); // hello
  const s2 = sq.pop(); // 메롱
  const s3 = sq.pop(); // 열공

  console.log(sq, s1?.toUpperCase(), s2, s3); // -> 선입선출 : 먼저 넣은 데이터가 먼저 나옴
  // s1?.toUpperCase() : s1이 undefined일 수 있기 때문에 ?가 자동으로 붙여짐

  /* -------------------------- 2. 숫자를 담는 큐 ------------------------- */
  interface NumQueue {
    data: number[];
    push(item: number): void;
    pop(): void;
  }

  class NumberQueue implements NumQueue {
    data: number[] = [];
    push(item: number) {
      this.data.push(item);
    }
    pop(): number | undefined {
      return this.data.shift();
    }
  }

  const nq = new NumberQueue();
  nq.push(3000);
  nq.push(80.8);
  nq.push(1);

  const n1 = nq.pop(); // 3000
  const n2 = nq.pop(); // 80.8
  const n3 = nq.pop(); // 1

  console.log(nq, n1, n2?.toFixed(), n3); // -> 선입선출 : 먼저 넣은 데이터가 먼저 나옴
})();
