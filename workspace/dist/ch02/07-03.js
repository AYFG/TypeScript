"use strict";
// Map - 제네릭 클래스
// 07-02.ts 복사
(() => {
    class MyMap {
        constructor() {
            // items: { [etc:string]:string } = {};
            this.items = {};
        }
        set(key, value) {
            this.items[key] = value;
        }
        get(key) {
            return this.items[key];
        }
        delete(key) {
            delete this.items[key];
        }
        has(key) {
            return this.items[key] !== undefined;
        }
        clear() {
            this.items = {};
        }
    }
    // Map 생성
    // const mymap = new MyMap<string,string>();
    const mymap = new Map();
    // 데이터 추가
    mymap.set("hello", "world");
    mymap.set("js", "JavaScript");
    mymap.set("ts", "TypeScript");
    mymap.set("next", 14.23456);
    // 데이터 추출
    const m1 = mymap.get("next");
    if (typeof m1 === 'string') { // 
        // console.log(mymap.get("js")?.toUpperCase());
        console.log(m1.toUpperCase());
    }
    else if (typeof m1 === 'number') {
        // console.log(mymap.get("hello").toFixed(2)); 
        console.log(m1.toFixed(2));
    }
    console.log(mymap.get("hello"));
    // 데이터 삭제
    mymap.delete("hello");
    // 데이터 조회
    console.log(mymap.has('hello'));
    console.log(mymap);
    // 데이터 초기화
    console.log(mymap.clear());
    console.log(mymap);
});
