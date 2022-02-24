import "./StartupsRegistrationFormApp.css";
import FormStartups from "./components/StartupsRegistrationFormFormStartups";
import Header from "../RegisterPage/RegisterHeader";
import Footer from "../RegisterPage/RegisterFooter";

function StartupsRegistrationFormApp() {
  return (
    <div className="startupsregistrationformApp">
      <div className="startupsregistrationform_header">
        <Header />
      </div>
      
      <div className="startupsregistrationformcontainer">
        <div className="startupsregistrationformgreen-circle-left"></div>
        <div className="startupsregistrationformblack-circle-left"></div>
        <div className="startupsregistrationformgreen-circle-right"></div>
        <div className="startupsregistrationformblack-circle-right"></div>
        <div className="startupsregistrationformgreen-circle-bottom-big"></div>
        <div className="startupsregistrationformgreen-circle-bottom-small"></div>
        <div className="startupsregistrationformblack-circle-bottom"></div>
        <div className="startupsregistrationformsub-container">
          <div className="startupsregistrationformmain-heading">
            Registration Form
          </div>
          <div className="startupsregistrationformsub-heading">Start-Ups</div>
          <div className="startupsregistrationformunderline"></div>
          <FormStartups />
        </div>
      </div>
      <div className="startupsregistrationform_footer">
        <Footer/>
      </div>
    </div>
  );
}

export default StartupsRegistrationFormApp;
