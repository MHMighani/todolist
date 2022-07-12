import React, { createContext, useEffect, useState } from "react";
import { setToLocalStorage, getFromLocalStorage } from "../utils";

export const TodoListsContext = createContext({});

function TodoListsProvider({ children }) {
  const initLists = getFromLocalStorage("todoLists");

  const [todoLists, setTodoLists] = useState(initLists);

  const addTodoList = (newTodoList) => {
    console.log(newTodoList);
    setTodoLists((prevTodoLists) => [...prevTodoLists, { ...newTodoList }]);
  };

  const deleteTodoList = (todoListId) => {
    const newTodoLists = todoLists.filter(
      (todoList) => todoList.id !== todoListId
    );

    setTodoLists(newTodoLists);
  };

  const editTodoList = (editedList) => {
    const newTodoList = todoLists.map((todoList) => {
      if (todoList.id === editTodoList.id) {
        return { ...todoList, ...editedList };
      }
      return todoList;
    });

    setTodoLists(newTodoList);
  };

  useEffect(() => {
    setToLocalStorage("todoLists", todoLists);
  }, [todoLists]);

  return (
    <TodoListsContext.Provider
      value={{ addTodoList, deleteTodoList, editTodoList, todoLists }}
    >
      {children}
    </TodoListsContext.Provider>
  );
}

export default TodoListsProvider;
