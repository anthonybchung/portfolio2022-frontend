import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Home.styles.scss";
import KeyProjects from "../../components/keyProjects/KeyProjects.component";
import WorkExperience from "../../components/workExperience/WorkExperience.component";

const Home = () => {
  return (
    <main className="home-container">
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
          <h6 className="banner-slogan">
            A programmer with several years of experience that have built
            computer system that automate a wind tunnel, a LAMP stack for a
            garment factory, and running an internet cafe with over 100
            computers.
          </h6>
        </div>
      </section>
      <section className="social-links">
        <a
          href="https://github.com/anthonybchung"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="social-button">
            <FontAwesomeIcon icon={faGithubSquare} size="3x" />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/anthony-b-chung/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="social-button">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </button>
        </a>
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
