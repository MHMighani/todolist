function TodoTask({ task }) {
  return (
    <>
      <p className="todoTask__text">{task.text}</p>
      <input
        type="checkbox"
        checked={task.isDone}
        className="todoTask__status"
      />
    </>
  );
}

export default TodoTask;
