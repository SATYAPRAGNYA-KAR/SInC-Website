import React from "react";
// import { Link } from 'react-router-dom'
import "./AboutStartupSummary.css";
import intern from "./Images/intern.png";
import mentor from "./Images/mentor.png";
import funding from "./Images/funding.png";
import connect from "./Images/connect.png";
import Header from "./AboutStartupHeader";

function Requirements() {
  return (
    <div>
      <Header />
      <div className="aboutstartuprequirementsContent">
        <div className="aboutstartuprequirementsCard">
          <div className="aboutstartuprequirementsimg">
            <img
              src={intern}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartuprequirementsCard-Topic">Intern Role</div>
        </div>
        <div className="aboutstartuprequirementsCard">
          <div className="aboutstartuprequirementsimg">
            <img
              src={mentor}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartuprequirementsCard-Topic">
            Mentoring Requirement
          </div>
        </div>
        <div className="aboutstartuprequirementsCard">
          <div className="aboutstartuprequirementsimg">
            <img
              src={funding}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartuprequirementsCard-Topic">
            Funding Requirement
          </div>
        </div>
        <div className="aboutstartuprequirementsCard">
          <div className="aboutstartuprequirementsimg">
            <img
              src={connect}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartuprequirementsCard-Topic">
            Connect with us!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requirements;
