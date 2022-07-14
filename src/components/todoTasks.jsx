import { useContext } from "react";
import TodoTask from "./todoTask";
import AddTask from "./addTask";
import { TodoTasksContext } from "../contexts/tasksContext";
import { TodoListsContext } from "../contexts/listsContext";

function TodoTasks() {
  const { tasks } = useContext(TodoTasksContext);
  const { selectedList } = useContext(TodoListsContext);

  const relatedTasks =
    selectedList && tasks.filter((task) => task.todoListId === selectedList.id);

  return (
    <section className="tasks-section">
      {selectedList ? (
        <>
          <div>
            <h2>{selectedList.title}</h2>
          </div>
          <AddTask todoListId={selectedList.id} />
          <ul className="todoTasks-list uk-list">
            {relatedTasks.map((task) => (
              <li
                className={`${task.isDone ? "done" : ""} todoTask`}
                key={task.id}
              >
                <TodoTask key={task.id} task={task} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2 className="uk-alert">No todo-list selected.</h2>
      )}
    </section>
  );
}

export default TodoTasks;
