import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";

function ButtonGroup({
  onSaveBtnClick,
  onEditBtnClick,
  editMode,
  onDeleteBtnClick,
  onCancelBtnClick,
}) {
  const btnGroup = editMode ? (
    <>
      <button
        onClick={onSaveBtnClick}
        className="uk-button uk-button-small uk-button-primary"
      >
        <FaCheck />
      </button>
      <button
        onClick={onCancelBtnClick}
        className="uk-button uk-button-small uk-button-danger"
      >
        <FaTimes />
      </button>
    </>
  ) : (
    <>
      <button
        className="uk-button uk-button-small uk-button-danger"
        onClick={onDeleteBtnClick}
      >
        <FaTrash />
      </button>
      <button
        onClick={onEditBtnClick}
        className="uk-button uk-button-small uk-button-primary"
      >
        <FaEdit />
      </button>
    </>
  );
  return <div className="uk-button-group">{btnGroup}</div>;
}

export default ButtonGroup;
