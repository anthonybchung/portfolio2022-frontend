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
      <div key={index} className="work-experience-card">
        <h3 className="card-title">{workExperience.period}</h3>
        <h4 className="card-company"> {workExperience.company}</h4>
        <h5 className="card-profession"> {workExperience.profession}</h5>

        <div className="card-responsibilities">
          {" "}
          {workExperience.responsibilities.map((responsibility, index) => {
            return <li key={index}>{responsibility}</li>;
          })}
        </div>
      </div>
    );
  });

  return <div className="work-experience-container">{workExperienceList}</div>;
};

export default WorkExperience;
