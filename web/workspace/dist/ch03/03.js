"use strict";
// Partial 유틸리티 타입
(() => {
    // 인터페이스로 정의
    //   interface PartialTodo extends Partial<Todo> {}
    // 타입 별칭으로 정의
    //   type PartialTodo =  Partial<Todo>
    const todo1 = {
        title: "할 일 1",
        content: "내용 1",
    };
    //    const todo2: PartialTodo = {
    const todo2 = {
        title: "할 일 2",
        content: "내용 2",
    };
    console.log(todo1, todo2);
})();
