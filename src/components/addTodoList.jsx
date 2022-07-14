import { useRef, useContext } from "react";
import { TodoListsContext } from "../contexts/listsContext";
import { getItemId, resetInputs, checkInputsValidation } from "../utils";

function AddTodoList() {
  const { addTodoList } = useContext(TodoListsContext);

  const titleInputRef = useRef();
  const descInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const titleValue = titleInputRef.current.value;
    const descValue = descInputRef.current.value;

    // check input validation
    if (!checkInputsValidation([titleValue, descValue])) return;

    const todoList = {
      id: getItemId(),
      title: titleValue,
      description: descValue,
    };

    addTodoList(todoList);
    // reset inputs to their empty state
    resetInputs([titleInputRef, descInputRef]);
  };

  return (
    <form className="addListForm" onSubmit={handleSubmit}>
      <input
        className="uk-input uk-form-width-medium"
        ref={titleInputRef}
        name="title"
        placeholder="Title"
        type="text"
      />
      <textarea
        className="uk-textarea"
        ref={descInputRef}
        name="description"
        placeholder="Description"
      />
      <button className="uk-button">submit</button>
    </form>
  );
}

export default AddTodoList;
