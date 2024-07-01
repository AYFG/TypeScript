// 인터섹션 타입(intersection type)

(()=>{
    type Todo = {
        title: string,
        content: string,
    }

    type TodoInfo = Todo & {
        id: number,
        success : boolean,
    }

    // type TodoExample = {
    //     title:string,
    //     content:string,
    //     id?:number,
    //     success?:boolean
    //     타입을 지정할 때는 타이트하게 옵셔널 타입은 차선책으로 사용하자
    // }

    const todo1: Todo = {
        title:"운동하기" , content:"스쿼트"
    }
    const todo2: TodoInfo = {
        title: "운동하기", content: "스쿼트", id: 1234, success: false
    };

    console.log(todo1,todo2)
})();