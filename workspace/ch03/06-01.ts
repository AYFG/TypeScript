// Mapped 타입 - 유니언 타입을 기반으로 객체 타입 생성(in)

(()=>{
  type UserField = 'id' | 'name' | 'address' | 'phone';

  type User = {
    [Prop in UserField]:string
  }

  const ryan: User = {
      id: "1",
      name: "라이언",
      address: "서울시",
      phone: "010-2341-1234"
  };

  console.log(ryan)
})();