// utility types
interface Profile {
  name: string;
  age: number;
  married: boolean;
}
const woong: Profile = {
  name: "woong",
  age: 28,
  married: false,
};
interface NewProfile {
  name: string;
  age: number;
}
// const woong2: Profile = {
// married가 없어서 오류가 나서 NewProfile를 만들었지만 중복되는 타입이 싫다.
const woong2: NewProfile = {
  name: "woong",
  age: 28,
};

// utility 타입의 Partial를 사용하면 부분적으로 사용할 수 있다
// interface Profile {
//   name?: string;
//   age?: number;
//   married?: boolean;
// }
// 이렇게 변환되고 사용 방법은 이렇다.
const woong3: Partial<Profile> = {
  name: "woong",
  age: 29,
};

// Partial 타입 만들어보기 (interface에 적용)
type Partial_Custom<T> = {
  // interface의 Key들을 꺼내서 ?로 만들어준다
  [Key in keyof T]?: T[Key];
};
//   원본 Partial
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };
const woong4: Partial_Custom<Profile> = {
  name: "woong",
  age: 28,
};

// Partial의 단점 : 모든 타입을 ?로 만들어서 아예 사용하지 않아도 오류가 안난다.
const emptyWoong: Partial<Profile> = {};

// utility Types의 Omit(생략), Pick (interface에 적용)
const woong5: Omit<Profile, "married"> = {
  // 생략할 키를 적어준다.
  name: "woong",
  age: 28,
};
const woong6: Pick<Profile, "name" | "age"> = {
  // 가져올 키를 적어준다.
  name: "woong",
  age: 28,
};

// Pick 타입 만들어보기

type Pick_Custom<T, S extends keyof T> = {
  [Key in S]: T[Key];
};
// Pick 원본 (lib.es5.d.ts)
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

// Omit 타입 만들기 (선행 조건 : Exclude)
// type Exclude<T, U> = T extends U ? never : T;
type Exclude_Practice = Exclude<keyof Profile, "married">; // type Exclude_Practice = "name" | "age"
// T에서 U타입을 빼낸다.

type Omit_Custom<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;
// S extends keyof any => S는 string | number | symbol
const woong7: Omit_Custom<Profile, "married"> = {
  name: "woong",
  age: 28,
};
// Omit 원본 (lib.es5.d.ts)
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Exclude,Extract (Key에 적용)

// type Exclude<T, U> = T extends U ? never : T;
// T에 U 타입이 있으면 never(없애라)로 만들어라
type ExcludeMarried = Exclude<keyof Profile, "married">;
// type Extract<T, U> = T extends U ? T : never;
type ExtractNameAndAge = Extract<keyof Profile, "name" | "age">;
// T에 U 타입이 있으면 남겨라 U타입이 아니면 never(없애라)로 만들어라

// required
interface OptionalProfile {
  name?: string;
  age?: number;
  married?: boolean;
}
const woong8: Required<OptionalProfile> = {
  // optional로 만들어진 타입을 필수로 만든다
  name: "woong",
  age: 28,
  married: false,
};
// 어떻게 필수로 만들었나?
type Required_Custom<T> = {
  [Key in keyof T]-?: T[Key];
  //   -?  => 옵셔널을 모두 제거해라
  //   +? => 옵셔널을 추가해라. 그렇지만 ?:와 똑같아서 사용되지 않는다
};
// Required 원본 (lib.es5.d.ts)
// type Required<T> = {
//     [P in keyof T]-?: T[P];
// };
const woong9: Required_Custom<OptionalProfile> = {
  name: "woong",
  age: 28,
  married: false,
};

// readonly도 제거가 가능하다.
interface ReadOnlyProfile {
  readonly name?: string;
  readonly age?: number;
  readonly married?: boolean;
}
type RemoveReadOnly_Custom<T> = {
  -readonly [Key in keyof T]-?: T[Key];
};
const removeReadOnlyWoong: RemoveReadOnly_Custom<ReadOnlyProfile> = {
  name: "woong",
  age: 28,
  married: false,
};

// Record : 객체를 표현하는 한 가지 방법
interface Obj {
  [key: string]: number;
}
const recordObj: Record<string, number> = { a: 3, b: 5, c: 7 };
// Record 만들기
type Record_Custom<T extends keyof any, S> = {
  // type Record_Custom<T, S> = {
  // 'T' 형식은 'string | number | symbol' 형식에 할당할 수 없습니다.ts(2322)
  // 객체의 키는 string or number or symbol만 올 수 있기 때문에 T 형식에 extends keyof any를 붙여준다.

  [key in T]: S;
};
const recordObj_custom: Record_Custom<string, number> = { a: 3, b: 5, c: 7 };

// non-nullable (Key에 적용)
type mixedValue = string | null | undefined | boolean | number;
type primitiveValue = NonNullable<mixedValue>;
// non-nullable 만들기
type NonNullable_Custom<T> = T extends null | undefined ? never : T;
type primitiveValue_Custom = NonNullable_Custom<mixedValue>;
// non-nullable 원본
// type NonNullable<T> = T & {};

// Parameters
function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}
type Params = Parameters<typeof zip>;
type First = Params[0];
type Second = Params[1];
type Third = Params[2];
// Parameters 만들기 (infer : 추론하다 extends에서만 사용 가능)
type Parameters_Custom<T extends (...args: any) => any> = T extends (
  ...args: infer A //   매개변수 자리를 추론하여 값이 있으면 그걸 써라
) => any
  ? A
  : never;
// T extends (...args: any)=> any (T를 함수로 제한하기)
// Parameters 원본
// type Parameters<T extends (...args: any) => any> = T extends (
//   ...args: infer P
// ) => any
//   ? P
//   : never;
type Params_Zip = Parameters_Custom<typeof zip>;
type First_zip = Params_Zip[0];
type Second_zip = Params_Zip[1];
type Third_zip = Params_Zip[2];

// ReturnType 만들기
type ReturnType_Custom<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer A
  ? A
  : never;
// ReturnType 원본
// type ReturnType<T extends (...args: any) => any> = T extends (
//   ...args: any
// ) => infer R
//   ? R
//   : any;
type ReturnType_Zip = ReturnType_Custom<typeof zip>;

// 닮은 꼴 타입
// type ConstructorParameters<T extends abstract new (...args: any) => any> =
//   T extends abstract new (...args: infer P) => any ? P : never;

// type InstanceType<T extends abstract new (...args: any) => any> =
//   T extends abstract new (...args: any) => infer R ? R : any;

class DummyClass {
  a: string;
  b: number;
  c: boolean;
  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}
const dummyVariable = new DummyClass("123", 456, true);
type SearchConstructorParams = ConstructorParameters<typeof DummyClass>; // typeof 클래스가 생성자
type SearchInstanceType = InstanceType<typeof DummyClass>;

const dummyVariable2: DummyClass = new DummyClass("123", 456, true); // 인스턴스 (new)

// Promise,Awaited 분석

const p1 = Promise.resolve(1)
  .then((a) => a + 1)
  .then((a) => a + 1)
  .then((a) => a.toString);
// Promise<number>,Promise<number>,Promise<number>,Promise<string>
const p2 = Promise.resolve(2); // Promise<number>
const p3 = new Promise((res, rej) => {
  // Promise<unknown>
  setTimeout(res, 1000);
});
Promise.all([p1, p2, p3]).then((result) => {
  // {'0':string,'1':number,'2':unknown}
  // (parameter) result: [(radix?: number | undefined) => string, number, unknown] 타입을 어떻게 알아냈을까?
  console.log(result); // [3,2,undefined]
});

// Promise.all 원본
// all<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]>; }>;

// T = [p1,p2,p3] {'0' : p1, '1' : p2, '2' : p3, length: 3}}
// keyof T = "0" | "1" | "2" | "length"

const arr = [1, 2, 3] as const;
type Arr2 = keyof typeof arr;
const key: Arr2 = "length";

// Awaited 원본
type Awaited<T> = T extends null | undefined
  ? T // special case for `null | undefined` when not in `--strictNullChecks` mode
  : T extends object & { then(onfulfilled: infer F, ...args: infer _): any } // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
  ? F extends (value: infer V, ...args: infer _) => any // if the argument to `then` is callable, extracts the first argument
    ? Awaited<V> // recursively unwrap the value
    : never // the argument to `then` was not callable
  : T; // non-object or non-thenable

type Result = Awaited<Promise<Promise<Promise<number>>>>; // type Result = number / 최종의 타입으로 추론해주는 Awaited
type Result2 = Awaited<{ then(onfulfilled: (v: number) => number): any }>; // thenable
