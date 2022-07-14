import { useRef, useContext, useState } from "react";
import { TodoListsContext } from "../contexts/listsContext";
import { FaPlus, FaTimes } from "react-icons/fa";
import { getItemId, resetInputs, checkInputsValidation } from "../utils";

function AddTodoList() {
  const { addTodoList } = useContext(TodoListsContext);
  const [showAddForms, setShowAddForms] = useState(false);

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

    setShowAddForms(false);
  };

  const hiddenAddFormsState = (
    <div>
      <span className="uk-margin-small-right uk-text-bold">Add todo-list</span>
      <button
        onClick={() => setShowAddForms(true)}
        className="uk-button uk-button-small uk-button-primary"
      >
        <FaPlus />
      </button>
    </div>
  );

  const addFormsState = (
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
      {/* confirm add list */}
      <div className="uk-button-group">
        <button className="uk-button uk-button-primary uk-button-small">
          <FaPlus />
        </button>
        {/* cancel add state */}
        <button
          onClick={() => setShowAddForms(false)}
          className="uk-button uk-button-small uk-button-danger"
        >
          <FaTimes />
        </button>
      </div>
    </form>
  );

  return showAddForms ? addFormsState : hiddenAddFormsState;
}

export default AddTodoList;
