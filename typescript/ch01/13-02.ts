// 인덱스 시그니처 - 배열

(() => {
  const arr1: string[] = ["1", "2", "3"];
  const arr2: Array<number> = [1, 2, 3];
  const arr3: (string | number)[] = ["123", 123];

  console.log(arr1, arr2, arr3);

  interface MixedArray {
    0: number;
    [key: number]: string | number;
  }

  const arr4: MixedArray = [1, 123, "집갈래요", 8282];
  const arr5: MixedArray = [123, "집갈래요", 8282, 0];

  console.log(arr4, arr5);
})();
