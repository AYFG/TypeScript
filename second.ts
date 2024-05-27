// lib.es5.d.ts 분석

// 1.forEach 제네릭
interface Array<T> {
  // forEach 타이핑
  //   forEach(
  //     callbackfn: (value: T, index: number, array: T[]) => void,
  //     thisArg?: any
  //   ): void;
}
// 제네릭 덕분에 value의 타입 추론이 잘되고있다.
[1, 2, 3].forEach((value) => {
  console.log(value);
});
["1", "2", "3"].forEach((value) => {
  console.log(value);
});
[true, false, true].forEach((value) => {
  console.log(value);
});
["123", 123, true].forEach((value) => {
  console.log(value);
});

const a: Array<number> = [1, "2", 3];
a.forEach((value) => {
  console.log(value);
});

function add<T>(x: T, y: T): T {
  return x;
}
function add2(x: string | number, y: string | number) {}

add("1", 2); //제네릭을 사용하여 작동하면 안되는 타입을 알려준다
add2("1", 2);
add<number>(1, 2); // 타입 파라미터 - 직접 제네릭에 들어갈 타입을 넣어줄 수 있는데 제네릭 타입 추론이 제대로 되지 않을 때 사용
<number>add(1, 2); // as 타입 강제 지정 헷갈리면 안된다

// map 제네릭
interface Array<T> {
  //   map<U>(
  //     callbackfn: (value: T, index: number, array: readonly T[]) => U,
  //     thisArg?: any
  //   ): U[];
  // }
  // 헷갈리지 않게 T 자리를 number로 임의로 바꿔본다
  map<U>(
    // 콜백함수의 리턴값 U
    callbackfn: (value: number, index: number, array: number[]) => string,
    thisArg?: any
  ): string[];
  //   타입스크립트 때문에 헷갈리면 자바스크립트로도 봐본다
  map<U>(callbackfn, thisArg): U[];
}
// 어떻게 제네릭이 toString으로 변환한 것을 추론해줬을까
const strings = [1, 2, 3].map((value) => {
  value.toString(); // ["1","2","3"]
  // toString -> (method) Number.toString(radix?: number | undefined): string으로 변환해주므로 U는 string이 된다
});

// filter 제네릭
interface Array<T> {
  //   filter<S extends T>(
  //     predicate: (value: T, index: number, array: readonly T[]) => value is S,
  //     thisArg?: any
  //   ): S[];
  //   filter(
  //     predicate: (value: T, index: number, array: readonly T[]) => unknown,
  //     thisArg?: any
  //   ): T[];
  //   filter<S extends string | number>( // S도 number여야 한다
  //     predicate: (
  //       value: string | number,
  //       index: number,
  //       array: string | number[]
  //     ) => value is S,
  //     thisArg?: any
  //   ): (string | number)[];
  //   filter(
  //     predicate: (
  //       value: number,
  //       index: number,
  //       array: readonly number[]
  //     ) => unknown,
  //     thisArg?: any
  //   ): number[];
}
const filtered = [1, 2, 3, 4, 5].filter((value) => value % 2);
// const filtered: number[] T는 넘버

const predicate = (value: string | number): value is string =>
  typeof value === "string";

const filtered2 = ["1", 2, "3", 4, "5"].filter(
  (value) => typeof value === "string"
); //["1","3","5"] string[] 나오는 결과 : const filtered2: (string | number)[] 왜 추론을 못하고 추론을 잘하게 하려면?
const filtered3 = ["1", 2, "3", 4, "5"].filter(predicate);

// 타입 만들기
interface Arr<T> {
  forEach(callback: (item: T, index: number) => void): void;
  //원본 forEach
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
}
const markTypeForEachA: Arr<number> = [1, 2, 3];
markTypeForEachA.forEach((item, index) => {
  console.log(item, index);
  item.toFixed(1);
});
markTypeForEachA.forEach((item) => {
  console.log(item);
  return "3";
});
const makeTypeForEachB: Arr<string> = ["1", "2", "3"];
makeTypeForEachB.forEach((item) => {
  console.log(item);
  item.charAt(3);
});
makeTypeForEachB.forEach((item) => {
  console.log(item);
  return "3";
});
const makeTypeC: Arr<string | number> = ["1", 2, "3"];
makeTypeC.forEach((item) => {
  console.log(item);
});

// map 타입 만들기
interface ArrMap<T> {
  map<S>(callback: (value: T, index: number) => S): S[];
  // 원본 map
  //   map<U>(
  //     callbackfn: (value: T, index: number, array: T[]) => U,
  //     thisArg?: any
  //   ): U[];
}
const makeTypeMap: ArrMap<number> = [1, 2, 3];
const plusMap = makeTypeMap.map((v, i) => v + 1); // [2,3,4]
const toStringMap = makeTypeMap.map((v) => v.toString()); // ['2','3','4']; string[]
const remainderMap = makeTypeMap.map((v) => v % 2 === 0); // [false,true,false] boolean[]
const toNumberMap = makeTypeMap.map((v) => +v);

// filter 타입 만들기
interface ArrFilter<T> {
  filter<S extends T>(callback: (value: T) => value is S): S[];
  // 원본 필터
  // filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  // filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}
const makeTypeFilter: ArrFilter<number> = [1, 2, 3];
const remainderFilter = makeTypeFilter.filter((v): v is number => v % 2 === 0); //[2] number[]
const StrAndNumArrayFilter: ArrFilter<number | string> = [1, "2", 3, "4", 5, 6];
const runToString = StrAndNumArrayFilter.filter(
  (v): v is string => typeof v === "string"
); //['2','4'] string[]
const runToNumber = StrAndNumArrayFilter.filter(
  (v): v is number => typeof v === "number"
); // [1,3,5] number[]
const predicateNumFilter = (v: string | number): v is number =>
  typeof v === "number";
const runToNumber2 = StrAndNumArrayFilter.filter(predicateNumFilter);

// 공변성, 반공변성, 이변성, 불변성
// 리턴값은 넓은 타입으로 대입 가능하다
function stringToNumber(x: string): number {
  return +x;
}
stringToNumber("1"); // 1

type stringToNumOrString = (x: string) => number | string;
const stringToNumber2: stringToNumOrString = stringToNumber; // ???

// 매개변수는 좁은 타입에도 대입이 된다
function stringToNumber_B(x: string | number): number {
  // (x: string) => number 또는 (x: number) => number
  return +x;
}
stringToNumber_B("1"); // 1

type stringToNumOrString_B = (x: string) => number;
// type stringToNumOrString_B = (x: string | number) => number; // 오히려 넓은 타입으로는 대입이 안된다.
const stringToNumber2_B: stringToNumOrString_B = stringToNumber;

// 타입 오버로딩
// 같은 타입을 여러 번 선언한다
declare function add_OverLoading(x: number, y: number): number;
declare function add_OverLoading(x: number, y: number, z: number): number;
declare function add_OverLoading(x: string, y: string): number;

add_OverLoading(1, 2);
add_OverLoading(1, 2, 3);
add_OverLoading("1", "2");

interface Add_interfaceOverLoading {
  (x: number, y: number): number;
  (x: string, y: string): string;
}
const add_interfaceOverLoading: Add_interfaceOverLoading = (x: any, y: any) =>
  x + y; // 인터페이스에서 오버로딩으로 타입들을 선언하여 any를 사용
add_interfaceOverLoading(1, 2);
add_interfaceOverLoading("1", "2");
add_interfaceOverLoading("1", 2);

class Add_classOverLoading {
  add_interfaceOverLoading(x: number, y: number): number;
  add_interfaceOverLoading(x: string, y: string): string;
  add_interfaceOverLoading(x: any, y: any) {
    // 위에 타입들만 오버로딩으로 되어 any는 무시됨
    return x + y;
  }
}

const add_classOverLoading =
  new Add_classOverLoading().add_interfaceOverLoading("1", 2);
