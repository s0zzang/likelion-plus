// 상수가 필요한 경우

(() => {
  function getSchedule(subject: string) {
    if (subject === "TypeScript") return `타스 수업은 이론 1주 프젝 1주인디`;
    else if (subject === "next.js")
      return `넥스트 수업은 이론 2주 프젝 4주인디`;
  }

  console.log(getSchedule("TypeScript"));
  console.log(getSchedule("next.js"));
})();
