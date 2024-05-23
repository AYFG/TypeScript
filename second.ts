// lib.es5.d.ts 분석

// 1.forEach 제네릭
interface Array<T> {
  // forEach 타이핑
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
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
const strings = [1, 2, 3].map((value) => {
  value.toString(); // ["1","2","3"]
  // toString -> (method) Number.toString(radix?: number | undefined): string으로 변환해주므로 U는 string이 된다
});
// 어떻게 제네릭이 toString으로 변환한 것을 추론해줬을까
