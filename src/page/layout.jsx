import { Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Sidebar from "../components/common/Sidebar";

const PageLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="page-layout">
      <div className="project-header">
        <div className="project-header-title">React Coding Problems</div>
        <div className="project-header-menu">
          {showSidebar ? (
            <IoMdClose onClick={() => setShowSidebar(false)} />
          ) : (
            <RxHamburgerMenu onClick={() => setShowSidebar(true)} />
          )}
        </div>
      </div>
      <div className="page-container">
        <div className="project-list">
          <Sidebar showSidebar={true} />
        </div>
        <div className="mobile-sidebar">
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
