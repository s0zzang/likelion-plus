// 드롭다운 리스트 생성 - 타입스크립트
// 06-01.js 복사

(() => {
  interface ICity {
    value: string;
    selected?: boolean;
  }
  interface IZipcode {
    value: number;
    selected?: boolean;
  }

  const cityList: ICity[] = [
    { value: "Seoul", selected: false },
    { value: "busan" },
    { value: "GwangJu", selected: true },
  ];

  const zipcodeList: IZipcode[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: true },
    { value: 56789 },
  ];

  // TODO: 아래와 같이 출력 되도록 함수 작성
  function createDropdownList(list: (ICity | IZipcode)[]) {
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
