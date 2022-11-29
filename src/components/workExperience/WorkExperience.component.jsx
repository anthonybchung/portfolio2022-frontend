import "./WorkExperience.styles.scss";
import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const WorkExperience = () => {
  const WORK_EXPERIENCES_URL = "/api/v1/work-experiences/";
  const [workExperiences, setWorkExperiences] = useState([]);

  useEffect(() => {
    const fetchWorkExperiences = async () => {
      try {
        const response = await axios.get(WORK_EXPERIENCES_URL);
        setWorkExperiences(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWorkExperiences();
  }, []);

  const workExperienceList = workExperiences.map((workExperience, index) => {
    return (
      <Card key={index} className="work-experience-card">
        <Card.Body>
          <Card.Title>{workExperience.period}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {workExperience.company}
            <br></br>
            {workExperience.profession}
          </Card.Subtitle>
          <Card.Text>
            {workExperience.responsibilities.map((responsibility, index) => {
              return <li key={index}>{responsibility}</li>;
            })}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return <div className="work-experience-container">{workExperienceList}</div>;
};

export default WorkExperience;
