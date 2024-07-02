"use strict";
// Enum으로 상수를 그룹화 -숫자형
// 18-04.ts 복사
(() => {
    // 그룹화되는 상수끼리 중복되지 않도록 값을 지정
    let SubjectName;
    (function (SubjectName) {
        //   TYPE_SCRIPT = 100,
        //   NEXT_JS = 101,
        // 넥스트에도 숫자가 자동으로 지정된다.
        SubjectName[SubjectName["TYPE_SCRIPT"] = 1000] = "TYPE_SCRIPT";
        SubjectName[SubjectName["NEXT_JS"] = 1001] = "NEXT_JS";
    })(SubjectName || (SubjectName = {}));
    // const TYPE_SCRIPT = "TypeScript";
    // const NEXT_JS = "Next.js";
    function getSchedule(subject) {
        if (SubjectName.TYPE_SCRIPT === subject) {
            return "타입스크립트 수업은 이론 1주 + 프로젝트 1주 입니다.";
        }
        else if (SubjectName.NEXT_JS === subject) {
            return "넥스트 JS 수업은 이론 2주 + 프로젝트 4주 입니다.";
        }
    }
    console.log(SubjectName.TYPE_SCRIPT);
    console.log(SubjectName.NEXT_JS);
})();
