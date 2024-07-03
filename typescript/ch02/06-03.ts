// 드롭다운 리스트 생성 - 유니온 타입
// 06-02.ts 복사

(() => {
  // 한 개의 인터페이스로 통일
  interface DropdownItem {
    value: string | number;
    selected?: boolean;
  }

  const cityList: DropdownItem[] = [
    { value: "Seoul", selected: false },
    { value: "busan" },
    { value: "GwangJu", selected: true },
  ];

  const zipcodeList: DropdownItem[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: true },
    { value: 56789 },
  ];

  cityList[0].value.toLocaleString();
  zipcodeList[0].value.toLocaleString();

  // TODO: 아래와 같이 출력 되도록 함수 작성
  function createDropdownList(list: DropdownItem[]) {
    const tag = list.map(
      (item) =>
        `<option selected="${item.selected ? "selected" : ""}">${
          typeof item.value === "string" ? item.value.toLowerCase() : item.value
        }</option>`
    );
    return `<select>\n${tag.join(`\n`)}\n</select>`;
  }

  console.log(createDropdownList(cityList));
  console.log(createDropdownList(zipcodeList));
})();
