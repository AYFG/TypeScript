// 드롭다운 리스트 생성 - 유니온 타입
// 06-02.ts 복사

(()=>{
      interface DropdownItem {
        value: string|number;
        selected?: boolean;
      }
      const cityList: DropdownItem[] = [
        { value: "Seoul", selected: false },
        { value: "busan" },
        { value: "GwangJu", selected: true },
        // { value: 56789 },
      ];

      const zipcodeList: DropdownItem[] = [
        { value: 12345, selected: false },
        { value: 34567, selected: true },
        { value: 56789 },
      ];

      // TODO: 아래와 같이 출력 되도록 함수 작성
      function createDropdownList(list: (DropdownItem)[]) {
        let value;
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
