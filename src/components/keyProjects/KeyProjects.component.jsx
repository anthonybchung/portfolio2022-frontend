import { useEffect, useState } from "react";
import axios from "../../config/axios";

import "./keyProjects.styles.scss";
const KeyProjects = () => {
  const SIDE_PROJECTS_URL = "api/v1/side-projects/";
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(SIDE_PROJECTS_URL);
        setProjects(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProjects();
  }, []);

  const projectLists = projects.map((project, index) => {
    return (
      <div className="project-card">
        <div className="card-title">
          {project.category}
          <a
            class="card-github"
            href={project.urlLink}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="card-subtitle">{project.name}</div>
        <div className="card-description">{project.description}</div>
        <ul>
          {project.keyPoints.map((keyPoint, index) => {
            return (
              <li className="card-key-points" key={index}>
                {keyPoint}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
  return <div className="key-projects-container">{projectLists}</div>;
};

export default KeyProjects;
