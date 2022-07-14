import { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleSidebarToggle = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <>
      <Navbar sidebarToggle={handleSidebarToggle} />
      <div className="content-section">
        <Sidebar showSidebar={showSidebar} />
        <main className="main-content">{children}</main>
      </div>
    </>
  );
}

export default Layout;
