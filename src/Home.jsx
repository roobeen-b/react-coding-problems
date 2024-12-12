import { useNavigate } from "react-router-dom";
import { allProjects } from "./config";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {allProjects.map((project) => (
        <div
          key={project.name}
          onClick={() => navigate(project.path)}
          className="home-card"
        >
          <h3>{project.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
