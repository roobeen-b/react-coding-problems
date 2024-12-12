import { useNavigate } from "react-router-dom";
import { allProjects } from "../config";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {allProjects.map((project) => (
        <div key={project.name} className="home-card">
          <h3>{project.name}</h3>
          <div className="home-card-buttons">
            <button
              className="btn-preview"
              onClick={() => navigate(project.path)}
            >
              Preview
            </button>
            <button
              className="btn-code"
              onClick={() => window.open(project.code, "_blank")}
            >
              View Code
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
