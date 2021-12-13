import "./StartupsRegistrationFormApp.css";
import FormStartups from "./components/StartupsRegistrationFormFormStartups";
import Header from "./components/StartupsRegistrationFormHeader";

function StartupsRegistrationFormApp() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="green-circle-left"></div>
        <div className="black-circle-left"></div>
        <div className="green-circle-right"></div>
        <div className="black-circle-right"></div>
        <div className="green-circle-bottom-big"></div>
        <div className="green-circle-bottom-small"></div>
        <div className="black-circle-bottom"></div>
        <div className="sub-container">
          <div className="main-heading">Registration Form</div>
          <div className="sub-heading">Start-Ups</div>
          <div className="underline"></div>
          <FormStartups />
        </div>
      </div>
    </div>
  );
}

export default StartupsRegistrationFormApp;
