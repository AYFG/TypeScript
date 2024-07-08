// 인터페이스 정의 - 객체의 속성과 메서드, 익명 함수, 선택적 속성, 읽기 전용 속성

(()=>{
    interface ITodo {
        // id:number,
        readonly id: number,
        title : string,
        content : string,
        done ?: boolean,
    }
    interface IToggle{
        (todo: ITodo): void
    }

    const todo1: ITodo = {
        id: 0,
        title: "달리기",
        content: "10분",
        done: false
    }
    todo1.title = "런닝머신"
    // todo1.id = 1

    const todo2: ITodo = {
        id: 1,
        title: "걷기",
        content: "5분",
    }

    console.log(todo1,todo2);

    // done 값을 반전시키는 토글 함수
    // const toggleDone = (todo:ITodo):void => {
    const toggleDone:IToggle = (todo) => {
        todo.done = !todo.done;
    };
    toggleDone(todo1);
    toggleDone(todo2);
})();