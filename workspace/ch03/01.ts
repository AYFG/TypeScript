// required - 인터페이스 | 타입 별칭의 옵셔널 프로퍼티도 필수로 사용하게 한다.
// partial - required와 반대로 모든 속성을 옵셔널로 사용하여 일부만 사용 가능하다.
// Pick<Type,Keys> - Type에서 Keys 속성을 선택해 타입을 생성한다. (interface | type 별칭에서 일부만 뽑아와 그 일부를 사용한다.)
// Omit<Type,Keys> - Type의 모든 속성에서 keys를 제외한 타입을 생성한다. (interface | type 별칭에서 지정한 것들만 제외하여 사용한다.)

// Readonly 유틸리티 타입
(() => {
  interface Todo {
    title: string;
    content: string;
  }

  const todo1: Todo = {
    title: "할일 1",
    content: "내용 1",
  };
  console.log(todo1);

  // interface ReadonlyTodo {
  //   readonly title: string;
  //   readonly content: string;
  // }

  // 인터페이스로 정의
  // <Todo> 왼쪽에 유틸리티 Readonly를 붙여서 상속
  // interface ReadonlyTodo extends Readonly<Todo> {}
  // 타입 별칭으로 정의
  type ReadonlyTodo = Readonly<Todo>;

  const todo2: ReadonlyTodo = {
    title: "할일 2",
    content: "내용 2",
  };
  console.log(todo2);
  // todo2.title = '수정'; // error

  //인터페이스나 타입 별칭이 아닌 즉석으로 바로 사용도 가능
  const todo3: Readonly<Todo> = {
    title: "할일 3",
    content: "내용 3",
  };
  console.log(todo3);
  // todo3.title = '수정'; // error
})();
