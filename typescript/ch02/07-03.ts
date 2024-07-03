/* ---------------------------------------------------------------- */
/*                          Map - 제네릭 클래스                         */
/* ---------------------------------------------------------------- */

(() => {
  // 없어도 상관없지만 설계를 위한 interface 작성
  interface IMap<K extends string | number, V> {
    set(key: K, value: V): void;
    get(key: K): V;
    delete(key: K): void;
    has(key: K): boolean;
    clear(): void;
  }

  // extends 키워드는 MyMap에만 작성
  class MyMap<K extends string | number, V> implements IMap<K, V> {
    // 인덱스 시그니처 : 어떤 속성이 들어올지 모를 때 사용
    private items: { [key: string]: V } = {};

    set(key: K, value: V): void {
      this.items[key] = value;
    }
    get(key: K): V {
      return this.items[key];
    }
    delete(key: K): void {
      delete this.items[key];
    }
    has(key: K): boolean {
      return this.items[key] !== undefined;
    }
    clear(): void {
      this.items = {};
    }
  }

  // Map 생성
  const mymap = new MyMap<string, string | number>();
  const newmap = new Map<string, string | number>();

  // 데이터 추가
  mymap.set("점심 메뉴", "짜장면");
  mymap.set("저녁 메뉴", "짬뽕");
  mymap.set("야식 메뉴", "탕수육");
  mymap.set("야식 메뉴", 0);
  newmap.set("a", 1230);
  newmap.set("b", 1330);
  newmap.set("c", 30);

  // 데이터 조회
  const m1 = mymap.get("야식 메뉴");
  if (typeof m1 === "string") console.log(m1.length);
  else if (typeof m1 === "number") console.log(m1.toFixed());
  console.log(newmap.get("a"));

  // 데이터 삭제
  mymap.delete("야식 메뉴");
  console.log(mymap.has("야식 메뉴"));
  console.log(mymap);

  // 데이터 초기화
  // mymap.clear();
  console.log(mymap);
  console.log(newmap);
})();
