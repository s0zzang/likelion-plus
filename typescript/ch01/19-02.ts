// Enum으로 상수를 그룹화 - 문자형
// 19-01.ts 복사

(() => {
  enum SubjectName {
    TYPE_SCRIPT = "TS",
    NEXT_JS = "NEXT",
  }
  // 아래의 객체가 생성됨 (인덱스로 접근 불가)
  // NEXT_JS: "NEXT"
  // TYPE_SCRIPT: "TS"

  // enum 병합
  enum SubjectName {
    REACT = "리액트",
  }

  function getSchedule(subject: string) {
    if (subject === SubjectName.TYPE_SCRIPT)
      return `타스 수업은 이론 1주 프젝 1주인디`;
    else if (subject === SubjectName.NEXT_JS)
      return `넥스트 수업은 이론 2주 프젝 4주인디`;
  }

  console.log(getSchedule(SubjectName.TYPE_SCRIPT));
  console.log(getSchedule(SubjectName.NEXT_JS));
  console.log(SubjectName);
})();
