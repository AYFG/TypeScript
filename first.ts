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

// 대문자 String은 래퍼 개체
const str: string = "hello";
const Str: String = "hell";
function StrTest(x: string, y: string) {}
StrTest(str, Str);
new String(); //여기서 쓰이는 래퍼 개체이므로 타입 지정 할 때는 소문자를 사용해야 한다

// 타입 커스텀 (자동완성도 해줌)
type World = "world" | "hell";
const hello: World = "world";
// 템플릿 리터럴 (타입도 들어갈 수 있다)
type Greeting = `hello ${World}`;
// 타입에 or가 들어가서 자동완성을 두 개를 추천해줌
const temp: Greeting = "hello hell";

let arr5: string[] = [];
let arr6: Array<string> = [];
function rest(a, ...args: string[]) {
  console.log(a, args); // 1,[2,3]
}
rest("1", "2", "3");

const tuple2: [string, number] = ["1", 1];
// 튜플은 개수와 타입이 지정되어있어서 추가를 막아준다.
tuple2[2] = "hello";
// 그렇지만 push는 막아주지 못한다.
tuple2.push("hello");

// enum 여러 변수들을 하나의 그룹으로 묶고싶을 때,JS로 변환할 때 남기지 않으려는 목적도 있음 남겨야 한다면 객체를 사용
const enum EnumDirection {
  Up = 3,
  Down = 4,
  Left = 5,
  Right = 6,
}
const EnumA = EnumDirection.Up;
const EnumB = EnumDirection.Left;

// 그렇지만 객체는 타입 추론이 값 그대로가 아닌 number로 추론한다.
const ObjectDirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
};
// as const : 이 값들을 상수로 사용하고 싶다면 readonly로 값이 고정.
const ObjectDirection2 = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
// Enum은 직접 타입으로 사용할 수 있다. dir : up,down,left,right중 하나여야 한다.
function walk(dir: EnumDirection) {}
walk(EnumDirection.Left);
// Object도 직접 타입으로 사용할 수 있지만 사용방법이 까다로워 enum이 쓰고 싶어지는 느낌이 든다.
type Direction = (typeof ObjectDirection2)[keyof typeof ObjectDirection2];
function run(dir: Direction) {}
run(ObjectDirection2.Right);
// keyof란? 여기서 a,b,c 키만 꺼내오고 싶다.
const obj2 = { a: "123", b: "hello", c: "world" };
type Key = keyof obj2; //obj2는 값인데 타입(형식)으로 사용하려 한다.
type Key2 = keyof typeof obj2;
// 반대로 값들만 가져오고싶다? as const가 붙어있어야 타입 추론이 가능하다.
type Key3 = (typeof ObjectDirection2)[keyof typeof ObjectDirection2];
type Key4 = (typeof obj2)[keyof typeof obj2]; //as const가 붙어있지 않아 타입추론이 string으로 널널하게 되는 모습.obj2에 as const를 붙여보고 다시 Key4에 마우스를 호버해보자

// 위의 enum을 사용하고 싶어지게했던 복잡한 object 타입 사용은 객체의 값들을 타입으로 사용하여 타입추론이 가능하게 한 것
type Direction2 = (typeof ObjectDirection2)[keyof typeof ObjectDirection2];

// 간단하게 하고싶으면 A , 객체지향 프로그래밍을 하고싶으면 interface
type A = { a: string };
const a2: A = { a: "hello" };

interface B {
  a: string;
}
const b2: B = { a: "hello" };

// union
function add2(x: string | number, y: string | number): string | number {
  //
  return x + y;
}

type A3 = string & number; // 안되는 intersection
const a3: A = 1;
type A4 = { hello: "world" } & { jae: "woong" }; //가능한 intersection
const a4 = { hello: "world", jae: "woong" }; //intersection(모두 만족해야하는 and)이어서 모든 속성이 다 있어야 한다.

type A5 = { hello: "world" } | { jae: "woong" }; //union(하나만 만족해도 되는 or)이어서 하나만 있어도 가능하다.
const a5: A5 = { hello: "world", jae: "woong" };

//타입 확장
type Animal = { breath: true };
type Mammal = Animal & { breed: true };
type Human = Mammal & { think: true };

interface A6 {
  breath: true;
}
//인터페이스 확장
interface B2 extends A6 {
  breed: true;
}
const b6: B2 = { breath: true, breed: true };
const woong: Human = { breath: true, breed: true, think: true };

//인터페이스는 같은 것을 여러 개 선언할 수 있다
interface A7 {
  talk: () => void;
}
interface A7 {
  eat: () => void;
}
interface A7 {
  shit: () => void;
}
const a7: A7 = { talk() {}, eat() {}, shit() {}, sleep() {} };
//이렇게 추가도 가능하여 다른 사람이 만든 인터페이스(남의 라이브러리)를 확장하는 것도 가능하다
interface A7 {
  sleep: () => void;
}

// 옛날 네이밍 타입을 변수명 앞에 붙여준다 요즘은 제네릭에만 붙이는 추세, 마우스 올려보면 바로 알 수 있기 때문
interface IProps {}
type TAlias = string | number;
enum EHello {
  Left,
  Right,
}
const a8: IProps = {};

// 타입을 집합으로 생각하자(좁은 타입, 넓은 타입)
type A8 = string | number; // 넓은 타입
type B3 = string; //좁은 타입
type C = string & number; // 없는 타입 공집합
// 객체는 상세할수록 좁다
type A9 = { name: string };
type B4 = { age: number };
type AB2 = A9 | B4;
type C1 = { name: string; age: number }; //좁은 타입

const ab: AB2 = { name: "woong" }; //넓은 타입
const c1: C1 = { name: "woong", age: 10 }; // 좁은 타입
const c2: C1 = ab;
const c3: C1 = { name: "woong", age: 10, married: false }; // 잉여 속성 검사 에러

// 잉여 속성 검사
interface A10 {
  a: string;
}
const obj3 = { a: "hello", b: "world" };
const obj4: A10 = { a: "hello", b: "world" }; //직접 넣어주면 에러가 나오는데 변수를 한 번 거치면 잉여 검사를 안해줌
// const obj4: A10 = obj3;

// void(빈,공허한) : 리턴 값을 넣으면 안되는 함수
// void 종류 세가지 1.함수 보이드 function test():void 2.매개변수 보이드 test:()=>void 3.매개변수 보이드 function test(:()=>void)
function a11(): void {
  return "3";
  return undefined; // undefined는 가능
  return null;
}
const b11 = a11();

interface Human2 {
  //메서드의 void는 리턴값이 존재할 수 있음 그렇지만 리턴값 무시(에러만 안남)
  talk: () => void;
}
const human2: Human2 = {
  talk() {
    return undefined;
    return "abc";
  },
};
// 매개변수의 콜백의 void는 리턴값이 존재할 수 있음 그렇지만 리턴값 무시(에러만 안남)
function a12(callback: () => void): void {}
a12(() => {
  return "3";
});
// declare(선언) : 리턴없이 타입만 선언할 때
declare function forEach(arr: number[], callback: (el: number) => void): void;
let target: number[] = [];
forEach([1, 2, 3], (el) => {
  target.push(el);
});
forEach([1, 2, 3], (el) => target.push(el));

// any를 쓸 바엔 as unknown을 쓴다
// const a13: any = human2.talk(); // any는 타입 검사를 포기함
// a13.method();
const a13: unknown = human2.talk(); // unknown도 없는게 베스트이긴 하지만 당장 타입을 정확히 모를 때
(a13 as Human2).talk();

// unknown이 가장 흔하게 나오는 경우
try {
} catch (error) {
  error.message; // 'error'은(는) 'unknown' 형식입니다.
  (error as Error).message;
}
