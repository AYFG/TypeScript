// 드롭다운 리스트 생성 - 제네릭 인터페이스와 함수
// 06-03.ts 복사

(()=>{
  interface DropdownItem<T> {
    value: T;
    selected?: boolean;
  }
  const cityList: DropdownItem<string>[] = [
    { value: "Seoul", selected: false },
    { value: "busan" },
    { value: "GwangJu", selected: true },
    // { value: 56789 },
  ];

  const zipcodeList: DropdownItem<number>[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: true },
    { value: 56789 },
  ];

  // TODO: 아래와 같이 출력 되도록 함수 작성
//   function createDropdownList(list: DropdownItem<string|number>[]) {
  function createDropdownList<T extends string | number>(list: DropdownItem<T>[]) {
    let value: T;
    const options = list.map((item) => {
      value = item.value;
      return `<option selected=${item.selected ? "selected" : ""}>${
        typeof value === "string" ? value.toLowerCase() : value
      }</option>`;
    });
    return `<select>\n${options.join("\n")}\n</select>`;
  }

  console.log(createDropdownList(cityList));

  /*
  <select>
  <option selected="">12345</option>
  <option selected="selected">34567</option>
  <option selected="">56789</option>
  </select>
  */
  console.log(createDropdownList(zipcodeList));
})();
