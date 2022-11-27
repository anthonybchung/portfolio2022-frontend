import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Home.styles.scss";
import KeyProjects from "../../components/keyProjects/KeyProjects.component";

const Home = () => {
  return (
    <Container fluid="md">
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
        </div>
      </section>
      <section className="social-links">
        <Button
          variant="outline-danger"
          href="https://github.com/anthonybchung"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithubSquare} size="3x" />
        </Button>

        <Button
          variant="outline-danger"
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
      </section>
    </Container>
  );
};

export default Home;
