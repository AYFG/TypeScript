// 함수의 타입 추론

(()=>{
// 매개변수의 타입을 지정하지 않으면 num은 any 타입
  function add10(num){
    return num + 10;
  }

  function add20(num = 20){
    return num + 10;
  }

  const result = add10(100.12345);
  const result2 = add20(100.12345);
  //   타입이 추론되어 메서드도 사용 가능해진다.
  console.log(result,result2.toFixed(2));

// 아무것도 리턴 안하여 void
//   function checkNum(x: number,y: number){

//   }
  function checkNum(x: number,y: number){
    let z;
    // string 반환
    if(x === 10){
        return 'x는 10';
    }
    // x가 무엇인지 몰라 정해진 리터럴을 사용할 수 없다.
    // else if(x > y){
    //     return '큰 수: ' + x
    // }
    else if(x > 5){
        // return 5;
        return "5";
    }
  }
  const returnValue = checkNum(10,20)

  console.log(returnValue);
})();