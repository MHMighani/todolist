import { useState } from "react";
import ButtonGroup from "./buttonGroup";
import { checkInputsValidation } from "../utils";

function TodoList({ todoList, onSelectList, onDeleteList, editList }) {
  const [editMode, setEditMode] = useState(false);
  const [formState, setFormState] = useState({
    title: todoList.title,
    description: todoList.description,
  });

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = () => {
    editList(todoList.id, formState);
  };

  const handleEditBtn = () => {
    setEditMode(true);
  };

  const handleSaveBtn = () => {
    // check input validation before submitting edit
    if (!checkInputsValidation([formState.title, formState.description]))
      return;

    handleEditSubmit();
    setEditMode(false);
  };

  const handleDeleteBtn = () => {
    onDeleteList(todoList.id);
  };

  const handleCancelBtn = () => {
    setEditMode(false);
    setFormState({ title: todoList.title, description: todoList.description });
  };

  const renderTextFields = () => {
    if (editMode) {
      return (
        <>
          <input
            onChange={handleInputChange}
            placeholder="Title"
            type="text"
            name="title"
            value={formState.title}
            className="uk-input uk-margin-small-bottom"
          />
          <input
            onChange={handleInputChange}
            placeholder="Description"
            type="text"
            name="description"
            className="uk-input"
            value={formState.description}
          />
        </>
      );
    }
    return (
      <>
        <div className="uk-text-lead todoList__title uk-text-break">
          {formState.title}
        </div>
        <div className="uk-text-meta todoList__description uk-text-break">
          {formState.description}
        </div>
      </>
    );
  };

  return (
    <>
      <div
        onClick={() => onSelectList(todoList)}
        className="uk-margin-bottom todoList__content"
      >
        {renderTextFields()}
      </div>
      <ButtonGroup
        editMode={editMode}
        onEditBtnClick={handleEditBtn}
        onSaveBtnClick={handleSaveBtn}
        onDeleteBtnClick={handleDeleteBtn}
        onCancelBtnClick={handleCancelBtn}
      />
    </>
  );
}

export default TodoList;
