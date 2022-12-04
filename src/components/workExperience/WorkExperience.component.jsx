import "./WorkExperience.styles.scss";
import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const WorkExperience = () => {
  const WORK_EXPERIENCES_URL = "/api/v1/work-experiences/";
  const [workExperiences, setWorkExperiences] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchWorkExperiences = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(WORK_EXPERIENCES_URL);
        setWorkExperiences(response?.data);
        setIsFetching(false);
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
          {isFetching && <Spinner animation="border" variant="danger" />}
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
