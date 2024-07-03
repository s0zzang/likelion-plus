/* ---------------------------------------------------------------- */
/*                       Queue - 제네릭 클래스                         */
/* ---------------------------------------------------------------- */
// 07-01.ts 복사

(() => {
  interface IQueue<T> {
    data: T[];
    push(item: T): void;
    pop(): void;
  }

  class Queue<T> implements IQueue<T> {
    data: T[] = [];
    push(item: T) {
      this.data.push(item);
    }
    pop(): T | undefined {
      return this.data.shift();
    }
  }

  /* ------------------- 1. 클래스 호출 시 string 타입 전달 ------------------- */
  const sq = new Queue<string>();
  sq.push("hello");
  sq.push("메롱");
  sq.push("열공");
  sq.push("합쉬다");

  const s1 = sq.pop(); // hello
  const s2 = sq.pop(); // 메롱
  const s3 = sq.pop(); // 열공

  console.log(sq, s1?.toUpperCase(), s2, s3); // -> 선입선출 : 먼저 넣은 데이터가 먼저 나옴

  /* ------------------- 2. 클래스 호출 시 number 타입 전달 ------------------- */
  const nq = new Queue<number>();
  nq.push(3000);
  nq.push(80.8);
  nq.push(1);

  const n1 = nq.pop(); // 3000
  const n2 = nq.pop(); // 80.8
  const n3 = nq.pop(); // 1

  console.log(nq, n1, n2?.toFixed(), n3); // -> 선입선출 : 먼저 넣은 데이터가 먼저 나옴
})();
