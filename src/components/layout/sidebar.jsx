import TodoLists from "../todoLists";
function Sidebar({ showSidebar }) {
  return (
    showSidebar && (
      <div className="sidebar">
        <TodoLists />
      </div>
    )
  );
}

export default Sidebar;
