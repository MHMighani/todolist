import { useRef, useContext } from "react";
import { TodoTasksContext } from "../contexts/tasksContext";
import { getItemId } from "../utils";

function AddTask({ todoListId }) {
  const { addTask } = useContext(TodoTasksContext);
  const taskTextInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskTextValue = taskTextInputRef.current.value;

    if (!taskTextValue || taskTextValue.trim() === "") return;

    const task = {
      id: getItemId(),
      text: taskTextValue,
      todoListId,
      isDone: false,
    };

    addTask(task);
  };
  return (
    <form onSubmit={handleSubmit} className="addTaskForm">
      <input ref={taskTextInputRef} name="taskText" type="text" />
      <button>Add Task</button>
    </form>
  );
}

export default AddTask;
