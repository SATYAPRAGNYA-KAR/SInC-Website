import "./StartupsRegistrationFormApp.css";
import FormStartups from "./components/StartupsRegistrationFormFormStartups";
import Header from "./components/StartupsRegistrationFormHeader";

function StartupsRegistrationFormApp() {
  return (
    <div className="startupsregistrationformApp">
      <Header />
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
    </div>
  );
}

export default StartupsRegistrationFormApp;
