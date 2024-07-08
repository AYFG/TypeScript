// 클래스 정의 - 타입스크립트
// 점수는 수정 불가하고 평균은 avg() 메서드만 사용
// 01-01.js 복사

(()=>{
    interface IHighSchool{
    kor: number;
    eng: number;

    sum(): number;
    avg() : number;
 }  
 class HighSchool implements IHighSchool{
    constructor(kor: number, eng:number) {
      this.kor = kor;
      this.eng = eng;
    }
     kor: number;
     eng: number;
    sum(): number {
      return this.kor + this.eng;
    }
    avg(): number {
      // return this.sum() / 2;
      return Math.round(this.sum() / 2);
    }
  }

  const s1 = new HighSchool(100, 91);
  console.log(`평균 : ${s1.avg()}`);

  s1.eng = 99;
  console.log(s1.sum() / 2);
})();