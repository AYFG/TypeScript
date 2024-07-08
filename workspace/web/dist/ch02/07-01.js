"use strict";
// Queue - 일반 클래스
(() => {
    // implements -> 규약 , 나는 이렇게 만들거야
    class StringQueue {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        // 배열이 비어있을 때 undefined 반환이 되는 것을 알고 union으로 string | undefined 타입 경고
        pop() {
            return this.data.shift();
        }
    }
    const sq = new StringQueue();
    sq.push("hello");
    sq.push("typescript");
    sq.push("world");
    console.log(sq);
    const s1 = sq.pop();
    const s2 = sq.pop();
    const s3 = sq.pop();
    console.log(s1, s2 === null || s2 === void 0 ? void 0 : s2.toUpperCase(), s3);
    class NumberQueue {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    const nq = new NumberQueue();
    nq.push(1);
    nq.push(2.567890);
    nq.push(3);
    console.log(nq);
    const n1 = nq.pop();
    const n2 = nq.pop();
    const n3 = nq.pop();
    console.log(n1, n2 === null || n2 === void 0 ? void 0 : n2.toFixed(2), n3);
})();
