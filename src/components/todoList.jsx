import TodoTasks from "./todoTasks";

function TodoList({ todoList }) {
  return (
    <>
      <h3 className="todoList__title">{todoList.title}</h3>
      <p className="todoList__description">{todoList.description}</p>
      <TodoTasks tasks={todoList.tasks} />
    </>
  );
}

export default TodoList;
