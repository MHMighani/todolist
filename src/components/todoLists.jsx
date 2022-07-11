import TodoList from "./todoList";

function TodoLists({ todoLists }) {
  return (
    <ul>
      {todoLists.map((todoList) => (
        <li className="todoList" key={todoList.id}>
          <TodoList todoList={todoList} />
        </li>
      ))}
    </ul>
  );
}

export default TodoLists;
