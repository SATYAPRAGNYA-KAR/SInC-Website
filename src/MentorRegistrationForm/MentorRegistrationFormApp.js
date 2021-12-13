import React, { Component } from "react";
import "./MentorRegistrationFormApp.css";
import Form from "./components/MentorRegistrationFormForm";
import img from "./img.png";

class MentorRegistrationFormApp extends Component {
  render() {
    return (
      <div className="Appname">
        <div className="container">
          <div className="heading">
            Mentor <br />
            Registration
          </div>
          <div className="horizontal-line-1"></div>
          <div className="horizontal-line-2"></div>
          <div className="vertical-line-1"></div>
          <div className="vertical-line-2"></div>
          <div className="small-circle"></div>
          <div className="big-circle"></div>
          <img src={img} alt="logo" />
          <Form />
        </div>
      </div>
    );
  }
}

export default MentorRegistrationFormApp;
