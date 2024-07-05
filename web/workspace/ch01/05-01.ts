// 유니언 타입(union type)

(()=>{
    // 유니온 타입 적용 전
    function logString(msg: string){
        console.log(msg)
    }
    function logNumber(msg: number){
        console.log(msg)
    }
    
    const msg1:string = 'hello';
    const msg2:number = 123;
    
    console.log(logString(msg1));
    console.log(logNumber(msg2));
    
    // 유니온 타입 적용 후
    function log(msg:string|number):void{
        console.log(msg)
    }

    console.log(log(msg1));
    console.log(log(msg2));
})();