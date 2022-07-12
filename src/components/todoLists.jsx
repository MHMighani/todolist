import { useContext } from "react";
import { TodoListsContext } from "../contexts/listsContext";
import TodoList from "./todoList";

  const { todoLists, deleteTodoList } = useContext(TodoListsContext);

  return (
    <ul>
      {todoLists.map((todoList) => (
        <li className="todoList" key={todoList.id}>
          <TodoList todoList={todoList} />
            <button onClick={() => deleteTodoList(todoList.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoLists;
