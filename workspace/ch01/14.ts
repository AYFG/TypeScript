// 인터페이스 상속

(()=>{
  interface Todo {
    title:string;
    content:string;
  }

  interface TodoInfo extends Todo {
    id:number;
    done:false
  }

  const todo1: Todo = {
      title: "할 일 1",
      content: "등록 할 때 사용"
  }

  const todo2:TodoInfo = {
      id: 0,
      done: false,
      title: "할 일 2",
      content: "상세 조회에 사용"
  }

  console.log(todo1,todo2)
})();