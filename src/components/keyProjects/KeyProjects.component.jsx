import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { Card } from "react-bootstrap";
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
      <Card key={index} style={{ width: "24rem", margin: "18px" }}>
        <Card.Body>
          <Card.Title>{project.category}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {project.name}
          </Card.Subtitle>
          <Card.Text>
            {project.description}
            {project.keyPoints.map((keyPoint, index) => {
              return <li key={index}>{keyPoint}</li>;
            })}
          </Card.Text>
          <Card.Link
            className="text-danger"
            href={project.urlLink}
            target="_blank"
          >
            GitHub
          </Card.Link>
        </Card.Body>
      </Card>
    );
  });
  return <div className="key-projects-container">{projectLists}</div>;
};

export default KeyProjects;
