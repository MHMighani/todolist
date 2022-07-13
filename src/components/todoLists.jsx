import { useContext } from "react";
import { TodoListsContext } from "../contexts/listsContext";
import AddTodoList from "./addTodoList";
import TodoList from "./todoList";
import { TodoTasksContext } from "../contexts/tasksContext";

function TodoLists() {
  const { todoLists, deleteTodoList, setSelectedList } =
    useContext(TodoListsContext);
  const { deleteRelatedTasks } = useContext(TodoTasksContext);

  const handleDeleteList = (todoListId) => {
    deleteRelatedTasks(todoListId);
    deleteTodoList(todoListId);
  };

  return (
    <div className="lists-section">
      <AddTodoList />
      <ul>
        {todoLists.map((todoList) => (
          <li className="todoList" key={todoList.id}>
            <div onClick={() => setSelectedList(todoList)}>
              <TodoList todoList={todoList} />
            </div>
            <button onClick={() => handleDeleteList(todoList.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
