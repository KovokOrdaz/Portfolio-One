import "./experience.css";
import { useContext } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { InfoContext } from "../../context/InfoContext";

function Experience() {

  const { experiences }: any = useContext(InfoContext);
  
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {experiences.map((x: any, index: any) => (
          <div className="experience__frontend" key={index}>
            <h3>{x.Title}</h3>
            <div className="experience__content">
              {x.Tech.map((y: any) => (
                <article className="experience__details" key={y.Name}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{y.Name}</h4>
                    <small className="text-light">{y.Level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Experience;
