// import { User } from './types/user';
// import { Todo } from "./types/todo";
// Pick 유틸리티 타입
// export interface Todo {
//      id: number;
//      title: string;
//      content: string;
//      done: boolean;
//      createdAt: Date;
//      updatedAt: Date;
//    }
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

   const user: User = {
    id:1,
    name:'무지'
   }
})();