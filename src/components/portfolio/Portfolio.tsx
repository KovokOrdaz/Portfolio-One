import { useContext } from "react";
import { InfoContext } from "../../context/InfoContext";
import E404 from "../../assets/E404.jpg";
// import Wako from "../../assets/Wako.png";

import "./portfolio.css";

function Portfolio() {
  const { works }: any = useContext(InfoContext);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {works.map((x: any, index: any) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={E404} alt="" />
            </div>
            <h3>{x.Name}</h3>
            <div className="portfolio__item-cta">
              <a href={x.Git} className="btn" target="_blank">
                GitHub
              </a>
              <a href={x.Demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Portfolio;
