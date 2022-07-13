import { useContext, useState, useRef, useEffect } from "react";
import { TodoTasksContext } from "../contexts/tasksContext";

function TodoTask({ task }) {
  const { deleteTask, editTask } = useContext(TodoTasksContext);
  const [editMode, setEditMode] = useState(false);

  const checkBoxRef = useRef();
  const taskTextRef = useRef();

  useEffect(() => {
    checkBoxRef.current.value = task.isDone;
    taskTextRef.current.value = task.text;
  });

  const btnGroup = !editMode ? (
    <>
      <button className="uk-button" onClick={() => deleteTask(task.id)}>
        delete
      </button>
      <button onClick={() => setEditMode(true)} className="uk-button">
        Edit
      </button>
    </>
  ) : (
    <>
      <button
        onClick={() => {
          editTask(task.id, { text: taskTextRef.current.value });
          setEditMode(false);
        }}
        className="uk-button"
      >
        save
      </button>
      <button onClick={() => setEditMode(false)} className="uk-button">
        cancel
      </button>
    </>
  );

  const renderTextField = () => {
    if (editMode) {
      return (
        <input readOnly={!editMode} ref={taskTextRef} className="uk-text" />
      );
    }
    return <p ref={taskTextRef}>{task.text}</p>;
  };

  return (
    <>
      <input
        ref={checkBoxRef}
        type="checkbox"
        className="uk-checkbox todoTask__status"
        onChange={() => editTask(task.id, { isDone: !task.isDone })}
        checked={task.isDone}
      />
      {renderTextField()}
      <div className="uk-button-group">{btnGroup}</div>
    </>
  );
}

export default TodoTask;
