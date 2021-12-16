import React, { Component } from "react";
import "./MentorRegistrationFormApp.css";
import Form from "./components/MentorRegistrationFormForm";
import img from "./img.png";

class MentorRegistrationFormApp extends Component {
  render() {
    return (
      <div className="mentorregistrationformAppname">
        <div className="mentorregistrationformcontainer">
          <div className="mentorregistrationformheading">
            Mentor <br />
            Registration
          </div>
          <div className="mentorregistrationformhorizontal-line-1"></div>
          <div className="mentorregistrationformhorizontal-line-2"></div>
          <div className="mentorregistrationformvertical-line-1"></div>
          <div className="mentorregistrationformvertical-line-2"></div>
          <div className="mentorregistrationformsmall-circle"></div>
          <div className="mentorregistrationformbig-circle"></div>
          <img src={img} alt="logo" />
          <Form />
        </div>
      </div>
    );
  }
}

export default MentorRegistrationFormApp;
