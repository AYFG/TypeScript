const a: string = "5";
const b: number = 7;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = null;
// 고정된 원시값
const g: true = true;
const h: 6 = 6;
// 타입추론 i:
const i = "타입추론";
function add(x: number, y: number) {
  return x + y; //리턴 타입 지정을 하지 않았는데 타입이 지정됨
}
// 함수
// function add(x: number, y: number): number {
//   return x + y;
// }
// 화살표 함수
// const add: (x: number, y: number) => number = (x, y) => x + y;
// type Add = (x: number, y: number) => number;
// const add: Add = (x, y) => x + y;
// 인터페이스
// interface Add {
//   (x: number, y: number): number;
// }
// const add: Add = (x, y) => x + y;
// add(1, 2);

// 배열
const arr: string[] = ["123", "456"];
const arr2: number[] = [123, 456];
// 배열 제네릭
const arr3: Array<number> = [123, 456];
// 튜플 ()
const arr4: [number, number, string] = [123, 345, "hello"];
// 객체
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };
