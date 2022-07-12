import { useContext } from "react";
import { TodoListsContext } from "../contexts/listsContext";
import AddTodoList from "./addTodoList";
import TodoList from "./todoList";

function TodoLists() {
  const { todoLists, deleteTodoList } = useContext(TodoListsContext);

  return (
    <>
      <AddTodoList />
      <ul>
        {todoLists.map((todoList) => (
          <li className="todoList" key={todoList.id}>
            <TodoList todoList={todoList} />
            <button onClick={() => deleteTodoList(todoList.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoLists;
