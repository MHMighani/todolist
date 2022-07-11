import TodoTask from "./todoTask";

function TodoTasks({ tasks }) {
  return (
    <ul className="todoTasks">
      {tasks.map((task) => (
        <li className="todoTask" key={task.id}>
          <TodoTask key={task.id} task={task} />
        </li>
      ))}
    </ul>
  );
}

export default TodoTasks;
