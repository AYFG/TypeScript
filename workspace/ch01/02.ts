// 기본 타입

// 튜플 = 인덱스 개수와 인덱스의 타입이 정해진 배열

(()=>{
    let str = 'hello';
    // let str : string = 'hello'
    let age: number = 30;

    let done: boolean;
    // done = "true";
    done = true;

    let done2;
    done2 = false;
    done2 = 100;

    let todo:object = {title:'도시락' , done:true};
    let todoList:Array<string> = ['도시락','프로젝터'];
    let todoList2:string[] = ['도시락','프로젝터'];

    let items:[string,number] = ['용쌤',39];

    let username:any = 219;
    username = "이일구"
    let nullval: null = null;
    let emptyVal: undefined = undefined;
})();
