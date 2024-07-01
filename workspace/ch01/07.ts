// 타입 별칭으로 객체의 타입 선언

(()=>{
    // 컴포넌트 User가 있을 수 있어서
    type UserData = {
        name:string,
        age:number,
    }
    
    const u1: UserData = {name:'라이언', age:30};
    const u2: UserData = {name:'코끼리',age:29};


    console.log(u1.name,u2.age)
})();