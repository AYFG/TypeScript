// 타입 단언이 필요한 JS 코드

(()=>{  
  const todo1 = {};
  todo1.title = "할 일 1";

  const todo2= {title: "할 일 2" };
  todo1.content = "타스 책보기"

  const todo3 = {
    title: "할 일 3",
    content: 'js 다시 보기'
  }

  const todo4 = {
    title: "할 일 4",
    content: 'React 복습'
  }
})();