/* eslint-disable prefer-const */
// let 사용
// 18-01.ts 복사

(() => {
  let ts = "TypeScript";
  let nextjs = "next.js";

  function getSchedule(subject: string) {
    if (subject === ts) return `타스 수업은 이론 1주 프젝 1주인디`;
    else if (subject === nextjs) return `넥스트 수업은 이론 2주 프젝 4주인디`;
  }

  console.log(getSchedule(ts));
  console.log(getSchedule(nextjs));
})();
