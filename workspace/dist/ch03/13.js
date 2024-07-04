"use strict";
// instanceof 연산자
(() => {
    console.log(new Date() instanceof Date);
    console.log(new Array() instanceof Array);
    console.log(new RegExp() instanceof RegExp);
    console.log([] instanceof Array);
    console.log(/'h'/ instanceof RegExp);
    console.log({} instanceof Object);
    console.log(new Object instanceof Object);
    console.log(new Array instanceof Object);
    console.log(/''/ instanceof Object);
    console.log(new XMLHttpRequest() instanceof XMLHttpRequest);
    console.log(new XMLHttpRequest() instanceof Object);
    console.log(document.querySelector('div') instanceof Element);
    console.log(document.querySelector('a') instanceof HTMLElement);
    class Todo {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        cry() {
            console.log("야옹");
        }
    }
    function getTitle(target) {
        if (target instanceof Todo) {
            return target.title;
        }
        else if (target instanceof Array) {
            return target[0];
        }
    }
    //   타입호환
    // 상위 타입 ITodo (동물,일반화) 특정 메서드 호출 불가
    //   const todo1: ITodo = new Todo ("할일1","내용 1")
    // 하위 타입 Todo (고양이,특별화) 
    const todo1 = new Todo("할일1", "내용 1");
    todo1.cry();
    const todo2 = ["할일2", "내용2"];
    console.log(getTitle(todo1));
    console.log(getTitle(todo2));
})();
