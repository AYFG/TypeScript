"use strict";
// 변수와 객체의 타입 추론
(() => {
    //   기본 데이터 타입의 변수 타입을 추론에 의지(권장)
    // const name: string = "데이지";
    const name = "데이지"; //'데이지'(string), 리터럴 타입 : 값 자체를 타입으로 사용
    let age = 25; //let으로 하면 값을 바꾸는 것이 가능하여 타입이 number 범위로 늘어남
    // const age = 25; // const로 선언하면 값 자체가 타입이 됨
    // 기본 데이터 타입을 명시적으로 지정할 경우
    let address; //값이 없는 변수는 타입 지정하자
    // let address: string;
    address = '서울시';
    address = 100;
    address = true;
    console.log(name, age, address);
    //객체 (속성값에 맞춰서 타입추론) 타입 or 인터페이스 권장
    const todo1 = {
        title: '할 일 1',
        content: '내용 1',
    };
    // 즉석 일회용 타입 
    // const todo2: {
    //     title: string,
    //     content: string
    // } = {
    //     title: '할 일 2',
    //     content: 'hello',
    // }
    const todo2 = {
        title: '할 일 2',
        content: 'hello',
    };
    function printTodo(todo) {
        console.log(todo.title, todo.content.toLowerCase());
    }
    printTodo(todo1);
    printTodo(todo2);
})();
