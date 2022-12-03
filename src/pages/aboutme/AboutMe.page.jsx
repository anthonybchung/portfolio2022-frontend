import "./AboutMe.styles.scss";
import profile from "../../anthony.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
const AboutMe = () => {
  return (
    <main className="aboutme-container">
      <div className="aboutme-header">
        <div className="aboutme-header-main">
          <h1 className="aboutme-title">Anthony B. Chung</h1>
          <h2 className="aboutme-email">anthony.b.chung@gmail.com</h2>
          <div className="aboutme-links">
            <a
              href="https://github.com/anthonybchung"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="3x"
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-b-chung/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x"></FontAwesomeIcon>
            </a>
            <a
              href="https://twitter.com/Anthony21094487"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitterSquare}
                size="3x"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="aboutme-photo-container">
          <div className="aboutme-photo">
            <img
              src={profile}
              alt="Profile Photo"
              width="150px"
              height="150px"
            />
          </div>
        </div>
      </div>
      <div className="aboutme-section">
        <p>
          I still rememeber the first time I saw a computer in real life. It was
          amazing to see 2 bars moving up and down the screen. While a
          sqaure(i.e ball) bounced between them. The game was called PONG
        </p>

        <p>
          The first line of code I wrote was in BASICS on an Apple ⅡC. It was a
          simple line doing simple maths.
        </p>

        <p>
          Coding became exremely interesting when I was at university. Linking
          up the computer to i/o analog to digital chips. Working out which
          address to use. Callibrating sensors and chips, then collecting data.
        </p>

        <p>
          These experiements at university gave me a head start in the work
          force as an engineer where I directed a team of engineers in
          automating the whole wind tunnel. The software can control the fan,
          control other mechanical devices and do data analysis.
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
