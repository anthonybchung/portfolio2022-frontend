import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Home.styles.scss";
import KeyProjects from "../../components/keyProjects/KeyProjects.component";
import WorkExperience from "../../components/workExperience/WorkExperience.component";

const Home = () => {
  return (
    <main className="home-main">
      <section className="banner-container">
        <div className="banner-main">
          <div className="stack-logo stack-top"></div>
          <div className="stack-logo" style={{ justifyContent: "flex-start" }}>
            ABChung
          </div>
          <div className="stack-logo" style={{ justifyContent: "center" }}>
            STACK
          </div>
          <div className="stack-logo" style={{ justifyContent: "flex-end" }}>
            .com
          </div>
          <h1 className="banner-heading"> Full Stack Developer</h1>
          <h6>
            A passionate web app developer that loves to build clean codes.
          </h6>
        </div>
      </section>
      <section className="social-links">
        <Button
          style={{ color: "#ec058c" }}
          variant="link"
          href="https://github.com/anthonybchung"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithubSquare} size="3x" />
        </Button>

        <Button
          style={{ color: "#ec058c" }}
          variant="link"
          href="https://www.linkedin.com/in/anthony-b-chung/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </Button>
      </section>

      <section className="key-projects">
        <h1>Key Projects</h1>
        <KeyProjects />
      </section>

      <section className="work-experience">
        <h1> Work Experience</h1>
        <WorkExperience />
      </section>
    </main>
  );
};

export default Home;
