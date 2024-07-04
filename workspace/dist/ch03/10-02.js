"use strict";
// TODO: JS로 작성된 코드를 TS로 리팩토링. 로직은 수정하지 말고 타입만 추가 정의
// 10-01.js 복사
(() => {
    //   const todo1:Todo = {}; //리팩토링 할 때 나중에 개발되야할 기능이라면.
    const todo1 = {};
    todo1.title = "할 일 1";
    // 처음부터 TS로 만든다면 as는 사용하지 말아야한다.
    //   const todo2 = { title: "할 일 2" };
    const todo2 = { title: "할 일 2" }; // 좋은 코드는 아니지만 로직은 건드리지 않고 최대한 TS 문법 오류가 나지 않게 하는 과정에서 임시로 사용한다.
    todo2.content = "타스 책보기";
    const todo3 = {
        title: "할 일 3",
        content: "js 다시 보기",
    };
    const todo4 = {
        title: "할 일 4",
        content: "React 복습",
    };
})();
