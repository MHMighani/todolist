function ButtonGroup({
  onSaveBtnClick,
  onEditBtnClick,
  editMode,
  onDeleteBtnClick,
  onCancelBtnClick,
}) {
  const btnGroup = editMode ? (
    <>
      <button onClick={onSaveBtnClick} className="uk-button">
        save
      </button>
      <button onClick={onCancelBtnClick} className="uk-button">
        cancel
      </button>
    </>
  ) : (
    <>
      <button className="uk-button" onClick={onDeleteBtnClick}>
        delete
      </button>
      <button onClick={onEditBtnClick} className="uk-button">
        Edit
      </button>
    </>
  );
  return <div className="uk-button-group">{btnGroup}</div>;
}

export default ButtonGroup;
