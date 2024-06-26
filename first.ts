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
// 타입 가드를 붙여쓰는게 unknown
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

// 타입 가드, 타입 좁히기
function numOrStr(a: number | string) {
  a.toFixed(1); //string이 섞여서 number 메소드 사용이 안된다.
  (a as number).toFixed(1); // 위험한 코드 , unknown일 때, 남이 만든 타입이 틀렸을 때 어쩔 수 없이 as를 사용한다.
  if (typeof a === "number") {
    a.toFixed(1); // 올바른 사용방법
  } else {
    //ts가 else도 파악하여 string일 경우를 else로 사용하여 쓸 수 있다.
    a.charAt(3);
  }
  if (typeof a === "string") {
    a.charAt(3);
  }
  if (typeof a === "boolean") {
    a.charAt(3); // 절대 사용될 수 없는 코드는 never로 나온다.
  }
}
numOrStr("123"); // as를 사용했는데 이렇게 실수하면 에러가 난다.
numOrStr(1);
// 숫자와 숫자배열 타입 좁히기
function numOrNumArray(a: number | number[]) {
  if (Array.isArray(a)) {
    //배열을 확인하는법 Array.isArray()
    //number[]
    a.concat(4);
  } else {
    //number
    a.toFixed(3);
  }
}
numOrNumArray(123);
numOrNumArray([1, 2, 3]);

//클래스 타입 좁히기
class A14 {
  aaa() {}
}
class B14 {
  bbb() {}
}
function aOrB(param: A14 | B14) {
  // 인스턴스의 타이핑은 클래스 이름으로 한다.
  if (param instanceof A14) {
    param.aaa();
  }
}
aOrB(A14()); // X 'typeof A14' 형식의 값은 호출할 수 없습니다. 'new'를 포함하려고 했습니까?
aOrB(new A14());
aOrB(new B14());

// 타입 체킹
type B15 = { type: "b"; bbb: string };
type C15 = { type: "c"; ccc: string };
// type D15 = { type: "c"; ccc: string }; // 타입 추론을 확실하게 해준다.
type D15 = { type: "d"; ddd: string };

function typeCheck(a: B15 | C15 | D15) {
  if (a.type === "b") {
    a.bbb;
  } else if (a.type === "c") {
    a.ccc;
  } else {
    a.ddd;
  }
  if ("bbb" in a) {
    a.bbb;
  } else if ("ccc" in a) {
    a.ccc;
  } else {
    a.ddd;
  }
}

// 객체 만들 때 좋은 습관 - 미리 타입 달아두기
const human3 = { type: "human" };
const dog3 = { type: "dog" };
const cat3 = { type: "cat" };
// 만약 객체에 타입을 달아두지 않았다면 기본키로 쓸 것을 찾아쓴다.
if ("말하기" in a) {
} else if ("멍멍" in a) {
} else {
}

interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}
// is가 있으면 커스텀 타입가드 함수
function catOrDog(a: Cat | Dog): a is Dog {
  if ((a as Cat).meow) {
    return false;
  }
  return true;
}

function pet(a: Cat | Dog) {
  if (catOrDog(a)) {
    console.log(a.bow);
  }
  if ("meow" in a) {
    console.log(a.meow);
  }
}

const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => {
  return input.status === "rejected";
};
const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => {
  return input.status === "fulfilled";
};

const promises = await Promise.allSettled([
  Promise.resolve("a"),
  Promise.resolve("b"),
]);
const errors = promises.filter(isRejected);

export {};

// v4.8
const x: {} = "hello";
const y: Object = "hi"; // {}, Object 는 모든 타입(null과 undefined는 제외)
const xx: object = "hi"; // 객체
const yy: object = { hello: "world" }; // object 지양, interface | type | class 사용 권장
const z: unknown = "hi";

// unknown = {} | null | undefined
if (z) {
  z; // const z: {}
}

interface AA {
  readonly a: String;
  b: string;
}
const aaaa: AA = { a: "hello", b: "world" };
aaaa.a = "123"; // 읽기 전용 속성 부여로 바꾸지 못하게 막아줌

type AAA = { [key: string]: number }; // index signature
const aaa: AAA = { a: 3, b: 5, c: 2, d: 123 };

type BB = "Human" | "Mammal" | "Animal"; // interface는 | & 가 안된다
type BBB = { [key in BB]: BB }; // mapped type
const bbb: BBB = { Human: "Animal", Mammal: "Human", Animal: "Mammal" };

//클래스 이름은 그 자체로 타입이 될 수 있다
class Alpha {
  private a: string = "123"; // TS 제공 private 사용 추천
  #b: number = 123; // JS 제공 private
  method() {
    console.log(this.a, this.#b);
  }
  constructor(a: string, b: number = 123) {}
}
type alpha2 = Alpha;
const alpha = new Alpha("123");
const bravo: typeof Alpha = Alpha;

// implements,private,protected js 변환하면 전부 사라진다
interface Alren {
  readonly a: string;
  b: string;
}
class Bond implements Alren {
  // private a: false; //클래스의 모양을 interface로 통제한다.
  private a: string;
  protected b: string;
  // public
  c: string = "wow";
  method() {
    console.log(this.a);
    console.log(this.b);
  }
}
class Chali extends Bond {
  method() {
    console.log(this.a); // private는 상속 받아도 사용 불가
    console.log(this.b); // protected는 상속 사용 가능
  }
}
// 인스턴스에서는 private,protected 둘 다 사용 불가
new Chali().a; // private 속성이 있어 Bond class 에서만 사용할 수 있다
new Chali().b; // private과 다른 점은 상속 받았을 때 사용이 가능하다
new Chali().c;

// 추상 클래스
abstract class Bond2 {
  private readonly a: string = "123";
  b: string = "world";
  c: string = "wow";

  abstract method(): void; // 추상 메소드는 반드시 구현에서 사용해줘야한다
}
//추상 클래스의 구현
class Chali2 extends Bond2 {
  // 비추상 클래스 'Chali2'은(는) 'Bond2' 클래스에서 상속된 추상 멤버 'method'을(를) 구현하지 않습니다
  // 추상 클래스 안에 추상 메소드를 선언했다면 상속 받은 구현 단계에서 꼭 사용해야 하고 하지 앉으면 에러가 난다.
  method() {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
}

// optional 있어도 되고 없어도 된다.
function abc(a: number, b?: number, c?: number) {
  // function abc(...args:number[]){ 개수 상관없이 전부 지정하고 싶을 때
}
abc(1);
abc(1, 2);
abc(1, 2, 3);
abc(1, 2, 3, 4);

let obj_: { a: string; b?: string } = { a: "hello", b: "world" };
obj_ = { a: "hello" };

// 문자열 또는 숫자열을 타입 지정하는 잘못된 코드
function add_(x: string | number, y: string | number): string | number {
  return x + y;
}
add_(1, 2); // 3
add("1", "2"); // 12

add(1, "2"); //12
add("1", 2); //12

// generic 함수를 선언할 때가 아닌 함수를 실행할 때 타입이 정해질 수 있도록 해주는 역할
// function add_Generic<T>(x: T, y: T): T {
function add_Generic<T extends number, K extends string>(x: T, y: K): T {
  return x + y;
}
add_Generic(1, 2);
add_Generic("1", "2");
add_Generic(true, false); // T에 제한이 없으면 true + false가 가능하게 됨

add_Generic("1", 2);
add_Generic(1, "2");

// 콜백함수의 형태를 제한하는 제네릭
function CallbackGeneric<T extends (a: string) => number>(x: T): T {
  return x;
}
CallbackGeneric((a) => +a);
// 제한이 없다는걸 표현할 때 any를 넣음
function freeGeneric<T extends (...args: any) => any>(x: T): T {
  return x;
}
// 생성자
function abs<T extends abstract new (...args: any) => any>(x: T): T {
  return x;
}
class ABS {
  constructor() {}
}
abs(ABS);

// 기본값
const defaultValue = (b: number = 3, c: number = 5) => {
  return "3";
};
const defaultValue2 = (b: { children: string } = { children: "woong" }) => {};
// 리액트 jsx 제네릭
const reactGeneric = <T = unknown>(x: T, y: T) => ({ x, y });
const reactGeneric2 = <T extends unknown>(x: T, y: T) => ({ x, y });
