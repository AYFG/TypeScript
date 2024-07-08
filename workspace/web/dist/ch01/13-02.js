"use strict";
// 인덱스 시그니처 - 배열
(() => {
    const arr1 = [];
    const arr2 = [];
    const arr3 = ['hello', 100];
    // const arr3: Array<string|number> = ['hello',100]
    console.log(arr1, arr2, arr3);
    const arr4 = ["hello", 100, 200, 'world'];
    const arr5 = [100, "hello", 'world', 200];
    console.log(arr4, arr5);
})();
