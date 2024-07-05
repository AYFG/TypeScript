// Queue - 제네릭 클래스
// 07-01.ts 복사

(()=>{
      interface Queue<T> {
        data: T[];
        push(item: T): void;
        pop(): T | undefined;
    }
    // implements -> 규약 , 나는 이렇게 만들거야
    // implements도 T이니 class에도 T
    class MyQueue<T> implements Queue<T> {
        data: T[] = [];
        push(item: T){
            this.data.push(item);
        }
        // 배열이 비어있을 때 undefined 반환이 되는 것을 알고 union으로 string | undefined 타입 경고
        pop(): T | undefined{
            return this.data.shift();
        }
    }
    // interface implements 하는 이유 : 여러 클래스 만들 때 통일성(공통 속성,메소드) 부여
    class MyStack<T> implements Queue<T> {
        data: T[] = [];
        push(item: T){
            this.data.push(item);
        }
        pop(): T | undefined{
            return this.data.pop();
        }
    }
    
    const sq = new MyQueue<string>();
    sq.push("hello")
    sq.push("typescript")
    sq.push("world")
    console.log(sq)
    const s1 = sq.pop();
    const s2 = sq.pop();
    const s3 = sq.pop();
    
    console.log(s1,s2?.toUpperCase(),s3)

    const nq = new MyQueue<number>();
    nq.push(1);
    nq.push(2.567890);
    nq.push(3);
    console.log(nq);
    const n1 = nq.pop();
    const n2 = nq.pop();
    const n3 = nq.pop();
    
    console.log(n1, n2?.toFixed(2), n3);

    // unknown ,제네릭에 타입을 지정하지 않았다.
    const unknownQ = new MyQueue();
    unknownQ.push(1);
    unknownQ.push(2.567890);
    unknownQ.push(3);
    console.log(unknownQ);
    const u1 = unknownQ.pop();
    const u2 = unknownQ.pop();
    const u3 = unknownQ.pop();
    
    // console.log(u1, u2?.toFixed(2), u3);
})();
