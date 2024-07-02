"use strict";
// echo 함수 - 일반 함수
(() => {
    //   function echo(msg:string){
    //     return msg;
    //   }
    //   function echo(msg:number){
    //     return msg;
    //   }
    //   function echo(msg:boolean){
    //     return msg;
    //   }
    //   console.log(echo('hello'))
    //   console.log(echo(200))
    //   console.log(echo(true))
    function echoString(msg) {
        return msg;
    }
    function echoNumber(msg) {
        return msg;
    }
    function echoBoolean(msg) {
        return msg;
    }
    console.log(echoString('hello'));
    console.log(echoNumber(200));
    console.log(echoBoolean(true));
})();
