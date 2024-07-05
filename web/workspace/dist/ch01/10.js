"use strict";
// 인터페이스 사용 - 변수, 함수의 매개변수, 리턴타입
// 09.ts 복사
(() => {
    //   type UserData = {
    //     name: string;
    //     age: number;
    //   };
    // 인터페이스를 객체의 타입으로 지정
    const u1 = { name: "라이언", age: 30 };
    const u2 = { name: "코끼리", age: 29 };
    console.log(u1.name, u2.age);
    //   함수의 리턴 타입으로 인터페이스 지정
    const createUser = (name, age) => {
        return {
            name, age
        };
    };
    //   함수의 매개변수로 인터페이스를 지정
    const getAge = (user) => {
        return user.age;
    };
    const u3 = createUser("웅재", 28);
    console.log(u3, getAge(u3));
})();
