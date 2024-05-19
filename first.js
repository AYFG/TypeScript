"use strict";
const a = "5";
const b = 7;
const c = true;
const d = undefined;
const e = null;
const f = null;
// 고정된 원시값
const g = true;
const h = 6;
// 타입추론 i:
const i = "타입추론";
function add(x, y) {
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
const arr = ["123", "456"];
const arr2 = [123, 456];
// 배열 제네릭
const arr3 = [123, 456];
// 튜플 ()
const arr4 = [123, 345, "hello"];
// 객체
const obj = { lat: 37.5, lon: 127.5 };
// js로 변환시 사라지는 부분 4개
const 콜론 = true;
Array; //제네릭
function minus(x, y) {
    return x - y;
}
// as - 앞의 타입을 강제로 바꿈 & js 변환시 as 사라짐
let aa = 123;
aa = "hello";
// never
// tsconfig.json의 설정 중 !noImplicitAny && strictNullChecks가 아니면 any로 나옴
try {
    const array = [];
    // const array: string[] = [];
    array.push("hello");
}
catch (error) {
    error;
}
// Element타입 F12 = 타입 정의 보기
const head = document.querySelector("#head");
console.log(head);
const span = document.querySelector("#span");
// Element | null 타입이기 때문에 if문이 없으면 null일 수도 있다고 알려준다.
if (span) {
    // 오타수정
    span.innesrHTML = "hello world";
    console.log(head);
}
// ! : 무조건 존재하는, undefined나 null이 아님을 보증함 !비추
const div = document.querySelector("#div");
// 대문자 String은 래퍼 개체
const str = "hello";
const Str = "hell";
function StrTest(x, y) { }
StrTest(str, Str);
new String(); //여기서 쓰이는 래퍼 개체이므로 타입 지정 할 때는 소문자를 사용해야 한다
const hello = "world";
// 타입에 or가 들어가서 자동완성을 두 개를 추천해줌
const temp = "hello hell";
let arr5 = [];
let arr6 = [];
function rest(a, ...args) {
    console.log(a, args); // 1,[2,3]
}
rest("1", "2", "3");
const tuple2 = ["1", 1];
// 튜플은 개수와 타입이 지정되어있어서 추가를 막아준다.
tuple2[2] = "hello";
// 그렇지만 push는 막아주지 못한다.
tuple2.push("hello");
const EnumA = 3 /* EnumDirection.Up */;
const EnumB = 5 /* EnumDirection.Left */;
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
};
// Enum은 직접 타입으로 사용할 수 있다. dir : up,down,left,right중 하나여야 한다.
function walk(dir) { }
walk(5 /* EnumDirection.Left */);
function run(dir) { }
run(ObjectDirection2.Right);
// keyof란? 여기서 a,b,c 키만 꺼내오고 싶다.
const obj2 = { a: "123", b: "hello", c: "world" };
const a2 = { a: "hello" };
const b2 = { a: "hello" };
// union
function add2(x, y) {
    //
    return x + y;
}
const a3 = 1;
const a4 = { hello: "world", jae: "woong" }; //intersection(모두 만족해야하는 and)이어서 모든 속성이 다 있어야 한다.
const a5 = { hello: "world", jae: "woong" };
const b6 = { breath: true, breed: true };
const woong = { breath: true, breed: true, think: true };
const a7 = { talk() { }, eat() { }, shit() { }, sleep() { } };
var EHello;
(function (EHello) {
    EHello[EHello["Left"] = 0] = "Left";
    EHello[EHello["Right"] = 1] = "Right";
})(EHello || (EHello = {}));
const a8 = {};
const ab = { name: "woong" }; //넓은 타입
const c1 = { name: "woong", age: 10 }; // 좁은 타입
const c2 = ab;
const c3 = { name: "woong", age: 10, married: false }; // 잉여 속성 검사 에러
const obj3 = { a: "hello", b: "world" };
const obj4 = { a: "hello", b: "world" }; //직접 넣어주면 에러가 나오는데 변수를 한 번 거치면 잉여 검사를 안해줌
// const obj4: A10 = obj3;
// void(빈,공허한) : 리턴 값을 넣으면 안되는 함수
// void 종류 세가지 1.함수 보이드 function test():void 2.매개변수 보이드 test:()=>void 3.매개변수 보이드 function test(:()=>void)
function a11() {
    return "3";
    return undefined; // undefined는 가능
    return null;
}
const b11 = a11();
const human2 = {
    talk() {
        return undefined;
        return "abc";
    },
};
// 매개변수의 콜백의 void는 리턴값이 존재할 수 있음 그렇지만 리턴값 무시(에러만 안남)
function a12(callback) { }
a12(() => {
    return "3";
});
let target = [];
forEach([1, 2, 3], (el) => {
    target.push(el);
});
forEach([1, 2, 3], (el) => target.push(el));
// any를 쓸 바엔 as unknown을 쓴다
// const a13: any = human2.talk(); // any는 타입 검사를 포기함
// a13.method();
const a13 = human2.talk(); // unknown도 없는게 베스트이긴 하지만 당장 타입을 정확히 모를 때
a13.talk();
// unknown이 가장 흔하게 나오는 경우
try {
}
catch (error) {
    error.message; // 'error'은(는) 'unknown' 형식입니다.
    error.message;
}
// 타입 가드, 타입 좁히기
function numOrStr(a) {
    a.toFixed(1); //string이 섞여서 number 메소드 사용이 안된다.
    a.toFixed(1); // 위험한 코드 , unknown일 때, 남이 만든 타입이 틀렸을 때 어쩔 수 없이 as를 사용한다.
    if (typeof a === "number") {
        a.toFixed(1); // 올바른 사용방법
    }
    else {
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
function numOrNumArray(a) {
    if (Array.isArray(a)) {
        //배열을 확인하는법 Array.isArray()
        //number[]
        a.concat(4);
    }
    else {
        //number
        a.toFixed(3);
    }
}
numOrNumArray(123);
numOrNumArray([1, 2, 3]);
//클래스 타입 좁히기
class A14 {
    aaa() { }
}
class B14 {
    bbb() { }
}
function aOrB(param) {
    // 인스턴스의 타이핑은 클래스 이름으로 한다.
    if (param instanceof A14) {
        param.aaa();
    }
}
aOrB(A14()); // X 'typeof A14' 형식의 값은 호출할 수 없습니다. 'new'를 포함하려고 했습니까?
aOrB(new A14());
aOrB(new B14());
function typeCheck(a) {
    if (a.type === "b") {
        a.bbb;
    }
    else if (a.type === "c") {
        a.ccc;
    }
    else {
        a.ddd;
    }
    if ("bbb" in a) {
        a.bbb;
    }
    else if ("ccc" in a) {
        a.ccc;
    }
    else {
        a.ddd;
    }
}
// 객체 만들 때 좋은 습관 - 미리 타입 달아두기
const human3 = { type: "human" };
const dog3 = { type: "dog" };
const cat3 = { type: "cat" };
// 만약 객체에 타입을 달아두지 않았다면 기본키로 쓸 것을 찾아쓴다.
if ("말하기" in a) {
}
else if ("멍멍" in a) {
}
else {
}
// is가 있으면 커스텀 타입가드 함수
function catOrDog(a) {
    if (a.meow) {
        return false;
    }
    return true;
}
function pet(a) {
    if (catOrDog(a)) {
        console.log(a.bow);
    }
    if ("meow" in a) {
        console.log(a.meow);
    }
}
