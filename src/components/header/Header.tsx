import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/IMG_6399.png"
import "./header.css"

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ordaz, Mario</h1>
        <h5 className="text-light">Computer Science Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
}
export default Header;
