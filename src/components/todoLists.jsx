import { useContext } from "react";
import { TodoListsContext } from "../contexts/listsContext";
import AddTodoList from "./addTodoList";
import TodoList from "./todoList";
import { TodoTasksContext } from "../contexts/tasksContext";

function TodoLists() {
  const { todoLists, deleteTodoList, setSelectedList, editTodoList } =
    useContext(TodoListsContext);
  const { deleteRelatedTasks } = useContext(TodoTasksContext);

  const handleDeleteList = (todoListId) => {
    deleteRelatedTasks(todoListId);
    deleteTodoList(todoListId);
  };

  return (
    <div className="lists-section">
      <AddTodoList />
      <ul className="uk-list uk-list-divider">
        {todoLists.map((todoList) => (
          <li className="todoList" key={todoList.id}>
            <TodoList
              onSelectList={setSelectedList}
              todoList={todoList}
              onDeleteList={handleDeleteList}
              editList={editTodoList}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
