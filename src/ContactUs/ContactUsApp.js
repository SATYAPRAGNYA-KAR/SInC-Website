// Need to add mail id, now it is just as text
//If possible, add contact number in the same way
//Need to add the links of all social media handles

import "./ContactUsApp.css";
import Form from "./components/ContactUsForm";
import Header from "./ContactUsHeader";
import bphone from "./images/backgroundphone.png";
import facebook from "./images/facebook.png";
import insta from "./images/insta.png";
import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";
import socialtree from "./images/socialtree.png";

function ContactUsApp() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bphone})`,
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat'
      }}
    >
      <Header />
      <div className="contact-us-heading">Contact Us</div>
      <div className="contact-us-box">
        <div className="content-left">
          <div className="left-heading">Address</div>
          <div className="left-body">
            Student Incubation Cell, Indian Institute of Technology-Delhi, Hauz
            Khas, New Delhi-110016
          </div>

          <div className="left-heading">Let's Talk</div>
          <div className="left-body">+234 081-1236-4568</div>

          <div className="left-heading">General Support</div>
          <div className="left-body">sinciitd@gmail.com</div>

          <div className="social-media">
            <a href="https://www.facebook.com/sinciitd">
              <img src={facebook} alt="facebook icon" />
            </a>
            <a href="https://www.instagram.com/sinciitd/">
              <img src={insta} alt="instagram icon" />
            </a>
            <a href="https://www.linkedin.com/company/sinciitd/mycompany/">
              <img src={linkedin} alt="linkedIn icon" />
            </a>
            <a href="https://twitter.com/sinc_iitd">
              <img src={twitter} alt="twitter icon" />
            </a>
          </div>

          <img
            className="socialtree"
            src={socialtree}
            alt="A tree of all social media handles"
          />
        </div>

        <div className="right-box">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactUsApp;
