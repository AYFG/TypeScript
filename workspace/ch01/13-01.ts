// 인덱스 시그니처 - 문자열

(()=>{
    // interface User{
    //     name:string,
    //     email:string,
    //     address:string,
    //     phone:string,
    //     hobby:string,
    // }
    interface User{
        name:string,
        email:string,
        // age:number, // 에러 (만약 꼭 필요하다면 인덱스 시그니쳐에 유니온 타입 지정)
        // [etc: string]: string | number
        [etc: string]: string
    }

    const ryan: User = {
        name: "라이언",
        email: "ryan@kakao.com",
        address: "서울시 중랑구 중화동",
        phone: "010-53232-253253",
        // hobby: "독서"
    }

    const muzi: User = {
        name: "무지",
        email: "muzi@kakao.com",
        age:"59",
        
    }

    console.log(ryan,muzi);
})();