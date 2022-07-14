import { FaBars } from "react-icons/fa";

function Navbar({ sidebarToggle }) {
  return (
    <div className="uk-navbar-container">
      <div className="uk-navbar-left">
        <button
          onClick={sidebarToggle}
          className="uk-button uk-button-default uk-button-small"
        >
          <FaBars />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
