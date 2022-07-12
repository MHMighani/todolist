import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import TodoListsProvider from "./contexts/listsContext";
import TasksProvider from "./contexts/tasksContext";

import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoListsProvider>
    <TasksProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TasksProvider>
  </TodoListsProvider>
);
