"use strict";
// 타입 단언 (any와 타입 단언은 최대한 피해야한다.)
(() => {
    // 타입 단언은 중첩이 가능하다
    const a = 20;
    // any는 아무것도 관여하지않지만 unknown은 타입 가드를 통해 안전하게 쓸 수 있다.
    function getMsg(msg) {
        return msg;
    }
    // const msg1 = getMsg(123.345)
    // console.log(msg1.toFixed(2)) // any 타입은 메서드 사용에 관여하지않아 컴파일 에러가 나지 않고 정상작동된다.
    const msg1 = getMsg(123.345);
    console.log(msg1.toFixed(2)); // 타입을 단언하여 number 메서드 자동완성을 지원한다.
    const msg2 = getMsg('hello');
    console.log(msg2.toLowerCase()); // 위와 같다. 그렇지만 좋은 방법은 아니다.
    function getMsg2(msg) {
        return msg;
    }
    const msg3 = getMsg2("hello");
    console.log(msg3.toLowerCase());
})();
