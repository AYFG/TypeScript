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
type P<T> = {
  // interface의 Key들을 꺼내서 ?로 만들어준다
  [Key in keyof T]?: T[Key];
};
//   원본 Partial
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };
const woong4: P<Profile> = {
  name: "woong",
  age: 28,
};

// Partial의 단점 : 모든 타입을 ?로 만들어서 아예 사용하지 않아도 오류가 안난다.
const emptyWoong: Partial<Profile> = {};
