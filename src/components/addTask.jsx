import { useRef, useContext } from "react";
import { TodoTasksContext } from "../contexts/tasksContext";
import { getItemId, resetInputs, checkInputsValidation } from "../utils";
import { FaPlus, FaTimes } from "react-icons/fa";

function AddTask({ todoListId }) {
  const { addTask } = useContext(TodoTasksContext);
  const taskTextInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskTextValue = taskTextInputRef.current.value;

    if (!checkInputsValidation([taskTextValue])) return;

    const task = {
      id: getItemId(),
      text: taskTextValue,
      todoListId,
      isDone: false,
    };

    addTask(task);
    // reset inputs to their empty state
    resetInputs([taskTextInputRef]);
  };
  return (
    <form onSubmit={handleSubmit} className="uk-form addTaskForm">
      <input
        className="uk-input uk-form-width-large uk-margin-right"
        ref={taskTextInputRef}
        name="taskText"
        type="text"
      />
      <button className="uk-button uk-button-primary">
        <FaPlus />
      </button>
    </form>
  );
}

export default AddTask;
