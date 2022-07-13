import React, { createContext, useEffect, useState } from "react";
import { getFromLocalStorage, setToLocalStorage } from "../utils";

export const TodoTasksContext = createContext({});

function TasksProvider({ children }) {
  const initTasks = getFromLocalStorage("todoTasks");

  const [tasks, setTasks] = useState(initTasks);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const newTasksCollection = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasksCollection);
  };

  const deleteRelatedTasks = (todoListId) => {
    const newTasksCollection = tasks.filter(
      (task) => task.todoListId !== todoListId
    );
    setTasks(newTasksCollection);
  };

  const editTask = (taskId, editedTask) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, editedTask };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  };

  useEffect(() => {
    setToLocalStorage("todoTasks", tasks);
  }, [tasks]);

  return (
    <TodoTasksContext.Provider
      value={{ tasks, addTask, deleteTask, editTask, deleteRelatedTasks }}
    >
      {children}
    </TodoTasksContext.Provider>
  );
}

export default TasksProvider;
