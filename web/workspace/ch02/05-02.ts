// echo 함수 - 제네릭 함수

(()=>{
  function echo<T>(msg:T):T {
    return msg;
  }
  

  console.log(echo<string>("hello"));
  console.log(echo<number>(200));
  console.log(echo<boolean>(true));

  const str = echo<string>('World')
  const num = echo<number>(123.456)

  console.log(str.toLowerCase())
  console.log(num.toFixed(2))
})();
