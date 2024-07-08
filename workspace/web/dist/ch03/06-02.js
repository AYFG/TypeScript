"use strict";
// Mapped 타입 - 객체 타입을 기반으로 객체 타입 생성(in keyof)
(() => {
    //   type UserField = "id" | "name" | "address" | "phone";
    const ryan = {
        id: "1",
        name: "라이언",
        address: "서울시",
        phone: "010-2341-1234",
    };
    console.log(ryan);
})();
