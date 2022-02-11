import "./RegistrationFormApp.css";
import Form from "./components/RegistrationFormForm";
import Header from "./RegistrationFormHeader";
import Footer from "./RegistrationFormFooter";

function RegistrationFormApp() {
  return (
    <div className="registrationformApp">
      <div className="registrationform_header">
        <Header/>
      </div>

      <div className="registrationformblack-circle-left"></div>
      <div className="registrationformgreen-circle-left"></div>
      <div className="registrationformgreen-circle-right-small"></div>
      <div className="registrationformgreen-circle-right-big"></div>
      <div className="registrationformblack-circle-right"></div>
      <div className="registrationformblack-circle-bottom"></div>
      <div className="registrationformgreen-circle-bottom-small"></div>
      <div className="registrationformgreen-circle-bottom-big"></div>

      <div className="registrationformintro">
        <div className="registrationformmain-heading">Registration Form</div>
        <div className="registrationformsub-heading">IITD Angel Network</div>

        <div className="registrationformunderline"></div>

        <div className="registrationformpara-1">
          We thank you for supporting Incubation Cell in our mission to nurture
          student startups at the early stages of their journey and to connect
          the IITD Startup Ecosystem formally through this portal.
        </div>

        <div className="registrationformbox-1">
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
        <div className="registrationformbox-2">
          <span>
            Please fill the form below and we will reach out to you personally.
          </span>
        </div>
        {/* <div className="footer">Footer</div> */}
      </div>

      <Form />
      <div className="registrationform_footer">
        <Footer/>
      </div>
    </div>
  );
}

export default RegistrationFormApp;
