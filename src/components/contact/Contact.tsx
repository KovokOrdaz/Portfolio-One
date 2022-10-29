import { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessageLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
function Contact() {

    const form : any = useRef();

    const sendEmail = (e:any) => {
      e.preventDefault();
      emailjs.sendForm('service_z1s5sy7', 'template_0u99aqa', form.current, '-_KNUJuEQg1stsM7v')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
      }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>(+58) 426 1581573 </h5>
            <a
              href="https://api.whatsapp.com/send?phone+584261581573"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessageLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Mario Alberto Ordaz</h5>
            <a href="https://m.me/marioalbertoordazvargas" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>MarioOrdazV@Gmail.Com</h5>
            <a href="mailto:marioordazv@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}


export default Contact;
