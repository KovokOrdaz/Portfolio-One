import { useContext } from "react";
import "./about.css";
import Star from "../../assets/IMG_6635.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { PersonalInfo } from "../../data/PersonalInfo";
import { InfoContext } from "../../context/InfoContext";

function About() {
  const { infoPersonal }: any = useContext(InfoContext);
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Star} alt="About Me Imagen" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>{PersonalInfo.Experience}</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>{PersonalInfo.Clients}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>{PersonalInfo.Projects}</small>
            </article>
          </div>
          <p>{infoPersonal.AboutMe}</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
