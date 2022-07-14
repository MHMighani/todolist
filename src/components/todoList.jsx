import { useState } from "react";
import ButtonGroup from "./buttonGroup";

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
          />
          <input
            onChange={handleInputChange}
            placeholder="Description"
            type="text"
            name="description"
            value={formState.description}
          />
        </>
      );
    }
    return (
      <>
        <h3 className="todoList__title">{formState.title}</h3>
        <p className="todoList__description">{formState.description}</p>
      </>
    );
  };

  return (
    <>
      <div onClick={() => onSelectList(todoList)} className="todoList__content">
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
