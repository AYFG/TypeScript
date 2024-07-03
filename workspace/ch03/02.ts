// Required 유틸리티 타입
(()=>{
  interface Todo {
    title: string;
    content?: string;
  }
    // 인터페이스로 정의
//   interface RequiredTodo extends Required<Todo> {}

    // 타입 별칭으로 정의 
//   type RequiredTodo =  Required<Todo>

   const todo1: Todo = {
    title:"할 일 1",
    content: "내용 1"
   }
   
//    const todo2: RequiredTodo = {
   const todo2: Required<Todo> = {
    title:"할 일 2",
    content: "내용 2"
   }

   console.log(todo1,todo2)
})();