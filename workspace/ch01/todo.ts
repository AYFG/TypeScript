(()=>{
  // TODO: 에러나 경고가 발생하는 부분에 적절한 타입 선언

  let todoItems:TodoItem[];

  // api
  function fetchTodoItems() {
    const todos:TodoItem[] = [
      { id: 1, title: '안녕', done: false },
      { id: 2, title: '타입', done: false },
      { id: 3, title: '스크립트', done: false },
    ];
    return todos;
  }
  
  // TODO: Todo Type 지정
interface TodoItem {
    id:number,
    title:string,
    done:boolean,
}
 
  // crud methods
  function fetchTodos() {
    const todos = fetchTodoItems();
    return todos;
  }
  
  function addTodo(todo:TodoItem) {
    todoItems.push(todo);
  }
  
  function deleteTodo(index: number) {
    todoItems.splice(index, 1);
  }

  function completeTodo(index: number, todo:TodoItem) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
  }
  
  // business logic
  function logFirstTodo() {
    return todoItems[0];
  }
  
  function showCompleted() {
    return todoItems.filter(item => item.done);
  }
  
//   function addTwoTodoItems(todo1:TodoItem,todo2:TodoItem){
//     addTodo(todo1)
//     addTodo(todo2)
//   }
  function addTwoTodoItems(){
    addTodo({ id: 4, title: "사과", done: false });
    addTodo({ id: 5, title: "딸기", done: false });
  }
  
  // 1. Todo 목록을 가져온다.
  todoItems = fetchTodos();
  // 2. 2개의 Todo를 등록한다.
  addTwoTodoItems(
    // { id: 4, title: '사과', done: false },
    // { id: 5, title: '딸기', done: false },
  );
  
  deleteTodo(1);
  completeTodo(0,todoItems[0]);
  completeTodo(2,todoItems[2]);
  console.log(logFirstTodo());
  console.log(showCompleted());


  console.log(todoItems);
  
})();

