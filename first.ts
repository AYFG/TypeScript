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

// js로 변환시 사라지는 부분 4개
const 콜론: true = true;
type 타입 = () => true;
interface 인터페이스 {}
Array<true>; //제네릭
// 심화 같은 이름의 함수
function minus(x: number, y: number): number; // 사라짐
function minus(x, y) {
  return x - y;
}
// as - 앞의 타입을 강제로 바꿈 & js 변환시 as 사라짐
let aa = 123;
aa = "hello" as unknown as number;

// never
// tsconfig.json의 설정 중 !noImplicitAny && strictNullChecks가 아니면 any로 나옴
try {
  const array = [];
  // const array: string[] = [];
  array.push("hello");
} catch (error) {
  error;
}
// Element타입 F12 = 타입 정의 보기
const head: Element = document.querySelector("#head");
console.log(head);

const span = document.querySelector("#span");
// Element | null 타입이기 때문에 if문이 없으면 null일 수도 있다고 알려준다.
if (span) {
  // 오타수정
  span.innesrHTML = "hello world";
  console.log(head);
}
// ! : 무조건 존재하는, undefined나 null이 아님을 보증함 !비추
const div = document.querySelector("#div")!;
