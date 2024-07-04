// in 연산자
// 04.ts 복사
import {Todo,User} from "./types/"

(()=>{

   type TodoRegist = Pick<Todo,"title"|"content">;
   type TodoList = Pick<Todo,"id" | "title" | "done" | "updatedAt">;

   const todo1: TodoRegist = {
       title: "할 일 1",
       content:"등록에 사용"
   };
   const todo2: TodoList = {
       id: 0,
       title: "목록 2",
       done: false,
       updatedAt: new Date()
   };

   console.log(todo1,todo2)

   function toString(todo: TodoList | TodoRegist){
    let str = ``;
    if('id' in todo){
        str = `[TodoList] id: ${todo.id}, title: ${todo.title}, done: ${todo.done}, updatedAt: ${todo.updatedAt}` 
    }else{
        str = `[TodoRegist] title: ${todo.title}, content: ${todo.content}` ;
    }
    return str;
   }
   console.log(toString(todo1));
   console.log(toString(todo2));

})();