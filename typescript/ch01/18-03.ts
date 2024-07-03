// const 사용
// 18-02.ts 복사

(() => {
  const TYPE_SCRIPT = "TypeScript";
  const NEXT_JS = "next.js";

  function getSchedule(subject: string) {
    if (subject === TYPE_SCRIPT) return `타스 수업은 이론 1주 프젝 1주인디`;
    else if (subject === NEXT_JS) return `넥스트 수업은 이론 2주 프젝 4주인디`;
  }

  console.log(getSchedule(TYPE_SCRIPT));
  console.log(getSchedule(NEXT_JS));
})();
