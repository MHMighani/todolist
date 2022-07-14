import React, { createContext, useEffect, useState } from "react";
import { setToLocalStorage, getFromLocalStorage } from "../utils";

export const TodoListsContext = createContext({});

function TodoListsProvider({ children }) {
  const initLists = getFromLocalStorage("todoLists");

  const [todoLists, setTodoLists] = useState(initLists);
  const [selectedList, setSelectedList] = useState(null);

  const addTodoList = (newTodoList) => {
    setTodoLists((prevTodoLists) => [...prevTodoLists, { ...newTodoList }]);
  };

  const deleteTodoList = (todoListId) => {
    const newTodoLists = todoLists.filter(
      (todoList) => todoList.id !== todoListId
    );

    // removing selected list if deleting it
    if (todoListId === selectedList?.id) {
      setSelectedList(null);
    }

    setTodoLists(newTodoLists);
  };

  const editTodoList = (listId, editedList) => {
    const newTodoList = todoLists.map((todoList) => {
      if (todoList.id === listId) {
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
      value={{
        addTodoList,
        deleteTodoList,
        editTodoList,
        todoLists,
        selectedList,
        setSelectedList,
      }}
    >
      {children}
    </TodoListsContext.Provider>
  );
}

export default TodoListsProvider;
