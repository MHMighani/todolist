import { useContext } from "react";
import TodoTask from "./todoTask";
import AddTask from "./addTask";
import { TodoTasksContext } from "../contexts/tasksContext";
import { TodoListsContext } from "../contexts/listsContext";

function TodoTasks() {
  const { tasks } = useContext(TodoTasksContext);
  const { selectedList } = useContext(TodoListsContext);

  const relatedTasks =
    selectedList && tasks.filter((task) => task.todoListId === selectedList.id);

  if (!selectedList) {
    return <h2>No list selected.</h2>;
  }

  return (
    <section className="tasks-section">
      <AddTask todoListId={selectedList.id} />
      <ul className="todoTasks-list uk-list">
        {relatedTasks.map((task) => (
          <li className="todoTask" key={task.id}>
            <TodoTask key={task.id} task={task} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoTasks;
