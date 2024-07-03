// 상수를 직접 그룹화
// 18-03.ts 복사

(() => {
  type ReadOnly = {
    readonly TYPE_SCRIPT: number;
    readonly NEXT_JS: number;
  };

  // 상수 그룹화 : 상수끼리 중복되지 않도록 값 지정
  const SubjectName: ReadOnly = {
    TYPE_SCRIPT: 0,
    NEXT_JS: 1,
  };

  function getSchedule(subject: number) {
    if (subject === SubjectName.TYPE_SCRIPT)
      return `타스 수업은 이론 1주 프젝 1주인디`;
    else if (subject === SubjectName.NEXT_JS)
      return `넥스트 수업은 이론 2주 프젝 4주인디`;
  }

  console.log(getSchedule(SubjectName.TYPE_SCRIPT));
  console.log(getSchedule(SubjectName.NEXT_JS));
})();
