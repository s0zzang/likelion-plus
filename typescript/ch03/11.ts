/* ---------------------------------------------------------------- */
/*                   함수가 null을 리턴할 수 있을 경우                      */
/* ---------------------------------------------------------------- */

(() => {
  const a = document.querySelector('a[href="dist/ch03/11.js"]');
  // a: Element | null
  /* --------------------- 📍 Non-null assertion -------------------- */
  a!.innerHTML += "클릭";

  /* --------------------------- 📍 타입 가드 --------------------------- */
  // a: Element
  if (a !== null) a.innerHTML += "이거 클릭 ";
  //   if (a !== null) a.href = '' // 'Element' 형식에 'href' 속성이 없습니다.

  /* -------------------- 📍 a 태그로 명확하게 제너릭 타입 전달 ------------------- */
  // a2: HTMLAnchorElement | null
  const a2 = document.querySelector<HTMLAnchorElement>(
    'a[href="dist/ch03/11.js"]'
  );
  if (a2 !== null) a2.href = "";
  console.log(a2?.href);
})();
