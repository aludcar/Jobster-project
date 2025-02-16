import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar, logoutUser } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [showLogout, setShowLogout] = useState(false)



  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => dispatch(toggleSideBar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={`dropdown ${showLogout && 'show-dropdown'}`}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(logoutUser())}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
