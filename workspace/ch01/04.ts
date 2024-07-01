// 선택적 파라미터(optional parameter)

(()=>{
    function user(name:string,age?:number):void{
        console.log(name,age)
    }
    user('라이언',30);
    user('네오');

})();