function TodoTask({ task }) {
  return (
    <>
      <p className="todoTask__content">{task.content}</p>
      <input type="checkbox" checked={task.done} className="todoTask__select" />
    </>
  );
}

export default TodoTask;
