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

// Partial 타입 만들어보기
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

// utility Types의 Omit(생략), Pick
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
// Pick 원본
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
// Omit 원본
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Exclude,Extract

// type Exclude<T, U> = T extends U ? never : T;
// T에 U 타입이 있으면 never(없애라)로 만들어라
type ExcludeMarried = Exclude<keyof Profile, "married">;
// type Extract<T, U> = T extends U ? T : never;
type ExtractNameAndAge = Extract<keyof Profile, "name" | "age">;
// T에 U 타입이 있으면 남겨라 U타입이 아니면 never(없애라)로 만들어라
