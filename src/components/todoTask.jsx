import { TodoTasksContext } from "../contexts/tasksContext";
import { useContext } from "react";

function TodoTask({ task }) {
  const { deleteTask } = useContext(TodoTasksContext);
  return (
    <>
      <p className="todoTask__text">{task.text}</p>
      <input
        type="checkbox"
        checked={task.isDone}
        className="todoTask__status"
      />
      <button onClick={() => deleteTask(task.id)}>delete</button>
    </>
  );
}

export default TodoTask;
