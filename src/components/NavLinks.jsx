import { NavLink } from "react-router-dom";
import links from "../util/links";

const NavLinks = ({ toggleSideBar }) => {
  return (
    <div className="nav-links">
      {links?.map(({ id, text, path, icon }) => (
        <NavLink
          to={path}
          className={`nav-link ${({ isActive }) => isActive && "active"}`}
          key={id}
          onClick={toggleSideBar}
        >
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
