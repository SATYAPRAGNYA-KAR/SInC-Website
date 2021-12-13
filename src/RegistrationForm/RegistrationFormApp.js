import "./RegistrationFormApp.css";
import Form from "./components/RegistrationFormForm";
import Header from "./components/RegistrationFormHeader";

function RegistrationFormApp() {
  return (
    <div className="App">
      <Header />
      {/* <div className="header">Header</div> */}

      <div className="black-circle-left"></div>
      <div className="green-circle-left"></div>
      <div className="green-circle-right-small"></div>
      <div className="green-circle-right-big"></div>
      <div className="black-circle-right"></div>
      <div className="black-circle-bottom"></div>
      <div className="green-circle-bottom-small"></div>
      <div className="green-circle-bottom-big"></div>

      <div className="intro">
        <div className="main-heading">Registration Form</div>
        <div className="sub-heading">IITD Angel Network</div>

        <div className="underline"></div>

        <div className="para-1">
          We thank you for supporting Incubation Cell in our mission to nurture
          student startups at the early stages of their journey and to connect
          the IITD Startup Ecosystem formally through this portal.
        </div>

        <div className="box-1">
          IITD Angel Network : It is formed with an intent to connect right
          people and help build a successful relationship amongst IITD Community
          to foster the startup ecosystem. <br />
          <br />
          Entrepreneurship Kickstart : This initiative is dedicated to nurture
          budding entrepreneurs in the campus (including those passed out an
          year back) through a guided process with the help of mentorship,
          nurturing funds (some form of grants), and most importantly helping
          them target right goals and channelising their energy in right
          direction.
        </div>
        <div className="box-2">
          <span>
            Please fill the form below and we will reach out to you personally.
          </span>
        </div>
        {/* <div className="footer">Footer</div> */}
      </div>

      <Form />
    </div>
  );
}

export default RegistrationFormApp;
