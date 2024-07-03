(() => {
  // TODO: 에러나 경고가 발생하는 부분에 적절한 타입 선언
  // TODO: Todo Type 지정
  interface TodoItem {
    readonly id: number;
    title: string;
    done: boolean;
  }

  // api
  function fetchTodoItems() {
    const todos: TodoItem[] = [
      { id: 1, title: "안녕", done: false },
      //   { id: 1, title: "안녕", dne: false }, : 타입 지정시 오타 검증 가능
      { id: 2, title: "타입", done: false },
      { id: 3, title: "스크립트", done: false },
    ];
    return todos;
  }

  // crud methods
  function fetchTodos() {
    const todos = fetchTodoItems();
    return todos;
  }

  // 1. Todo 목록을 가져온다.
  const todoItems = fetchTodos();

  function addTodo(todo: TodoItem) {
    todoItems.push(todo);
  }

  function deleteTodo(index: number) {
    todoItems.splice(index, 1);
  }

  function completeTodo(index: number) {
    if (todoItems.length < index)
      return console.log("투두 리스트의 개수보다 큰 값을 입력했습니다.");
    todoItems[index].done = true;
  }

  // business logic
  function logFirstTodo() {
    return todoItems[0];
  }

  function showCompleted() {
    return todoItems.filter((item: TodoItem) => item.done);
  }

  function addTwoTodoItems() {
    // TODO: addTodo() 함수를 두 번 호출하여 todoItems에 할일 2개 추가
    addTodo({ id: 4, title: "풀 받으쇼", done: false });
    addTodo({ id: 5, title: "받았는뎁쇼", done: true });
  }

  // 2. 2개의 Todo를 등록한다.
  addTwoTodoItems();

  console.log(todoItems);
  deleteTodo(2);
  completeTodo(0);
  console.log(logFirstTodo());
  console.log(showCompleted());
  console.log(todoItems);
})();
