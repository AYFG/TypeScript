// 함수 호환
(() => {
    const todo1 = {
        title: "할 일 1",
        content: "등록에 사용",
    };
    const todo2 = {
        id: 0,
        title: "목록 2",
        done: false,
        content: "목록에 사용",
    };
    console.log(todo1, todo2);
    function toString(todo) {
        const str = `[TodoRegist] title: ${todo.title}, content: ${todo.content}`;
        return str;
    }
    console.log(toString(todo1));
    console.log(toString(todo2));
    console.log(toString({
        title: "목록 3",
        //   id: 3,
        //   done: false,
        content: "목록에 사용",
        //   name: '무지',
        //   age: 25,
    }));
})();
export {};
