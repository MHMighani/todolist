import { useContext } from "react";
import TodoTask from "./todoTask";
import AddTask from "./addTask";
import { TodoTasksContext } from "../contexts/tasksContext";

function TodoTasks({ todoListId }) {
  const { tasks } = useContext(TodoTasksContext);
  const relatedTasks = tasks.filter((task) => task.todoListId === todoListId);

  return (
    <>
      <AddTask todoListId={todoListId} />
      <ul className="todoTasks">
        {relatedTasks.map((task) => (
          <li className="todoTask" key={task.id}>
            <TodoTask key={task.id} task={task} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoTasks;
