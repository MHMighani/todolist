import { useRef, useContext } from "react";
import { TodoListsContext } from "../contexts/listsContext";

function AddTodoList() {
  const { addTodoList } = useContext(TodoListsContext);

  const titleInputRef = useRef();
  const descInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const titleValue = titleInputRef.current.value;
    const descValue = descInputRef.current.value;

    // check input validation
    if (!titleValue.trim() || !descValue.trim()) return;

    const todoList = {
      id: new Date().getTime(),
      title: titleValue,
      description: descValue,
    };

    addTodoList(todoList);
  };

  return (
    <form className="addListForm" onSubmit={handleSubmit}>
      <input ref={titleInputRef} name="title" type="text" />
      <input ref={descInputRef} name="description" type="text" />
      <button>submit</button>
    </form>
  );
}

export default AddTodoList;
