import "./services.css";
import { BiCheck } from "react-icons/bi";
import { InfoContext } from "../../context/InfoContext";
import { useContext } from "react";

function Services() {
  const { trades }: any = useContext(InfoContext);
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {trades.map((x: any, index: any) => (
          <article className="service" key={index}>
            <div className="service__head">
              <h3>{x.Name}</h3>
            </div>
            <ul className="service__list">
              {x.Description.map((y: any, index: any) => (
                <li key={index}>
                  <BiCheck className="service__list-icon" />
                  <p>{y.Item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Services;
