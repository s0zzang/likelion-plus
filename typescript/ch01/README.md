### 💡 기본 타입

- 타입 추론이 가능하다면 굳이 타입 선언하지 말기
- `null` & `undefined`
  ```jsx
  // null, undefined
  let nullVal: null = null;
  let emptyVal: undefined = undefined;
  ```
  - 타입 추론이 되지 않으므로 타입 선언해줘야 함

### 💡 선택적 파라미터

```jsx
function user(name: string, age?: number): void {
  console.log(name, age);
}

user("라이언", 30);
user("네오");
```

### 💡 type alias : 타입 별칭

- 속성 끝에 세미콜론, 콤마 모두 사용 가능
  ```jsx
  type UserData = {
    name: string,
    age: number,
  };
  ```

### 💡 유니언, 인터섹션

```jsx
const varName = string | number;

type Todo = {
  title: string,
  content: string,
};
type TodoInfo = Todo & {
  id: number,
  done: boolean,
};
```

- 타입은 아주 상세하게 작성하기
- 인터섹션 : 주로 타입 별칭 지정할 때 주로 사용함

### 💡 인터페이스

- 타입 별칭과 다르게 `=` 없이 사용
- 객체라면 보통 인터페이스 사용 권장
- 클래스 타입 지정할 때 사용 가능

  ```jsx
  interface Score {
    kor: number;
    eng: number;
    sum(): number;
    avg(): number;
  }

  class HighSchool implements Score {
    ...
  }

  const kim = new HighSchool(100, 90);
  console.log(kim.sum(), kim.avg())
  ```

- 호출 시그니처에 사용 가능

  ```jsx
  type Operation2 = {
    (a: number, b: number): number,
  };

  interface SaySome {
    (name: string, message: string): string;
  }

  interface IToggle {
    (todo: ITodo): ITodo;
  }
  const toggleDone: IToggle = (todo) => {
    todo.done = !todo.done;
    return todo;
  };
  ```

- readonly

  ```jsx
  type Todo = {
    readonly id: number;
    title: string;
    done?: boolean;
  }

  interface Todo {
    readonly id: number;
    title: string;
    done?: boolean;
  }
  ```

- 인덱스 시그니처

  - 속성 이름, 타입만 정의하는 것
  - **객체 키** : 문자 | 숫자

  ```jsx
  interface User {
    name: string,
    email: string,
    **[etc: string]: string**
  }

  interface User {
    name: string,
    age?: **number**,  // 에러 O
    email: string,
    [etc: string]: string // 옵셔널과 같은 의미
  }

  interface User {
    name: string,
    age?: **number**,  // 에러 X
    email: string,
    [etc: string]: string | number // 옵셔널과 같은 의미
  }

  interface MixedArray {
    0: number;
    [key: number]: string | number;
  }
  const arr4: MixedArray = [1, 123, "집갈래요", 8282];
  const arr5: MixedArray = [123, "집갈래요", 8282, 0];
  ```

  - 필수로 지정한 속성(name, email)과 타입이 같아야 함

### 💡 인터페이스 vs 타입 별칭

- 상속 : 인터페이스만 가능
- 정의할 수 있는 타입 종류
  - `타입별칭` : 객체, 클래스, 기본, **유니언**, **인터섹션**, **유틸리티**, **맵드** 등
  - `인터페이스` : 객체 ,클래스, 함수(호출 시그니처), 배열(인덱스 시그니처)
- 타입 확장
  - `타입별칭` : & 연산자 사용
  - `인터페이스` : extends 키워드, 선언 병합

### 💡 선언 병합

```jsx
interface Todo {
  title: string;
  content: string;
}

interface Todo {
  id: number;
  title: number; // ❌ 병합시 기존 속성의 타입과 다르면 안됨
  done: boolean;
}
```

- 병합시 이전 선언의 속성과 새로운 선언의 속성 타입이 같아야 함

### 💡 enum

- 열거형 데이터 타입

  ```jsx
  enum Language {
    Javascript,
    C,
    Python,
    Java
  }
  console.log(Language);

  switch(lang) {
    case Language.Javascript: // 0
      ...
    case Language.C: // 1
      ...
  }
  ```

- 값을 직접 할당하는 경우
  ```jsx
  enum Language {
    Javascript = 'JS',
    C = 'C',
    Python = 'PY',
    Java = 'J'
  }
  console.log(Language);
  ```
- 병합

  ```jsx
  enum SubjectName {
    TYPE_SCRIPT = "TS",
    NEXT_JS = "NEXT",
  }
  // NEXT_JS: "NEXT"
  // TYPE_SCRIPT: "TS"

  // enum 병합
  enum SubjectName {
    REACT = "리액트",
  }
  // NEXT_JS: "NEXT"
  // TYPE_SCRIPT: "TS"
  // REACT: "리액트"
  ```

- enum으로 상수 그룹화

  ```jsx
  const enum SubjectName {
    TYPE_SCRIPT = "TS",
    NEXT_JS = "NEXT",
  }

  console.log(getSchedule(SubjectName.TYPE_SCRIPT)); // 사용 가능
  console.log(SubjectName) // 에러

  /* 컴파일 결과 */
  function getSchedule(subject) {
      if (subject === "TS" /* SubjectName.TYPE_SCRIPT */)
          return `타스 수업은 이론 1주 프젝 1주인디`;
      else if (subject === "NEXT" /* SubjectName.NEXT_JS */)
          return `넥스트 수업은 이론 2주 프젝 4주인디`;
  }
  console.log(getSchedule("TS" /* SubjectName.TYPE_SCRIPT */));
  console.log(getSchedule("NEXT" /* SubjectName.NEXT_JS */));
  ```

  - TS, NEXT만 남고 사라짐
  - 가능하다면 const로 만드는 것이 좋음
