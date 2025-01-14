import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div className={`sidebar-container ${isSidebarOpen && "show-sidebar"}`}>
        <div className="container">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
