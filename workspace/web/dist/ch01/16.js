"use strict";
// 인터페이스 다중 상속
(() => {
    const todo1 = {
        title: "할 일 1",
        content: "등록 할 때 사용",
    };
    const todo2 = {
        id: 0,
        done: false,
        title: "할 일 2",
    };
    const todo3 = {
        createdAt: new Date(),
        updatedAt: new Date(),
        title: "할 일 3",
        content: "상세 조회에 사용",
        id: 123,
        done: false
    };
    console.log(todo1, todo2, todo3);
})();
