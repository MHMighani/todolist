import { useContext, useState, useRef, useEffect } from "react";
import { TodoTasksContext } from "../contexts/tasksContext";
import ButtonGroup from "./buttonGroup";
import { checkInputsValidation } from "../utils";

function TodoTask({ task }) {
  const { deleteTask, editTask } = useContext(TodoTasksContext);
  const [editMode, setEditMode] = useState(false);

  const checkBoxRef = useRef();
  const taskTextRef = useRef();

  useEffect(() => {
    checkBoxRef.current.value = task.isDone;
    taskTextRef.current.value = task.text;
  });

  const handleDeleteBtn = () => {
    deleteTask(task.id);
  };

  const handleEditBtn = () => {
    setEditMode(true);
  };

  const handleSaveBtn = () => {
    // check input validation before submitting edit
    if (!checkInputsValidation([taskTextRef.current.value])) return;

    editTask(task.id, { text: taskTextRef.current.value });
    setEditMode(false);
  };

  const handleCancelBtn = () => {
    setEditMode(false);
  };

  const renderTextField = () => {
    if (editMode) {
      return (
        <input ref={taskTextRef} className="uk-input uk-form-width-medium" />
      );
    }
    return (
      <span className="uk-text-lead" ref={taskTextRef}>
        {task.text}
      </span>
    );
  };

  return (
    <>
      <label className="uk-form-label uk-margin-right task__content">
        <input
          ref={checkBoxRef}
          type="checkbox"
          className="uk-checkbox uk-margin-small-right todoTask__status"
          onChange={() => editTask(task.id, { isDone: !task.isDone })}
          checked={task.isDone}
        />
        {renderTextField()}
      </label>
      <ButtonGroup
        onSaveBtnClick={handleSaveBtn}
        onCancelBtnClick={handleCancelBtn}
        onDeleteBtnClick={handleDeleteBtn}
        onEditBtnClick={handleEditBtn}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </>
  );
}

export default TodoTask;
