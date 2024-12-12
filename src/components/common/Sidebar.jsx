import { useLocation, useNavigate } from "react-router-dom";
import { allProjects } from "../../config";
import { FaCode } from "react-icons/fa";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    showSidebar && (
      <ul>
        {allProjects.map((project) => (
          <li
            key={project.name}
            onClick={() => {
              navigate(project.path);
              setShowSidebar && setShowSidebar(false);
            }}
            className={location.pathname === project.path ? "active-tab" : ""}
          >
            <span>{project.name}</span>
            <span
              onClick={() => window.open(project.code, "_blank")}
              title="View Code"
            >
              <FaCode />
            </span>
          </li>
        ))}
      </ul>
    )
  );
};

export default Sidebar;
