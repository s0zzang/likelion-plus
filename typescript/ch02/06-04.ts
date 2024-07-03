// 드롭다운 리스트 생성 - 제네릭 인터페이스와 함수
// 06-03.ts 복사

(() => {
  // 제네릭 활용
  interface DropdownItem<T extends string | number> {
    value: T;
    selected?: boolean;
  }

  const cityList: DropdownItem<string>[] = [
    { value: "Seoul", selected: false },
    { value: "busan" },
    { value: "GwangJu", selected: true },
  ];

  const zipcodeList: DropdownItem<number>[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: true },
    { value: 56789 },
  ];

  // TODO: 아래와 같이 출력 되도록 함수 작성
  //   function createDropdownList(list: DropdownItem<number | string>[]) {
  function createDropdownList<T extends string | number>(
    list: DropdownItem<T>[]
  ) {
    const tag = list.map(
      ({ value, selected }) =>
        `<option selected="${selected ? "selected" : ""}">${
          typeof value === "string" ? value.toLowerCase() : value
        }</option>`
    );
    return `<select>\n${tag.join(`\n`)}\n</select>`;
  }

  console.log(createDropdownList(cityList));
  console.log(createDropdownList(zipcodeList));
})();
