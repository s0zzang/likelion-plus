// Enum으로 상수를 그룹화 -숫자형
// 18-04.ts 복사

(() => {
  enum SubjectName {
    TYPE_SCRIPT = 100,
    NEXT_JS = 101,
  }
  // 아래의 객체가 생성됨 (숫자 지정하지 않으면 0부터)
  // 100: "TYPE_SCRIPT"
  // 101: "NEXT_JS"
  // NEXT_JS: 101
  // TYPE_SCRIPT: 100

  function getSchedule(subject: number) {
    if (subject === SubjectName.TYPE_SCRIPT)
      return `타스 수업은 이론 1주 프젝 1주인디`;
    else if (subject === SubjectName.NEXT_JS)
      return `넥스트 수업은 이론 2주 프젝 4주인디`;
  }

  console.log(getSchedule(SubjectName.TYPE_SCRIPT));
  console.log(getSchedule(SubjectName.NEXT_JS));
  //   console.log(getSchedule(SubjectName[0])); : 인덱스로도 사용 가능
  //   console.log(getSchedule(SubjectName[0]));
  console.log(SubjectName);
})();
