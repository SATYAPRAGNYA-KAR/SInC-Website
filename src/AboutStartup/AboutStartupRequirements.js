import React from "react";
// import { Link } from 'react-router-dom'
import "./AboutStartupSummary.css";
import intern from "./Images/intern.png";
import mentor from "./Images/mentor.png";
import funding from "./Images/funding.png";
import connect from "./Images/connect.png";

function Requirements() {
  return (
    <div>
      <div className="Content">
        <div className="Card">
          <div className="img">
            <img
              src={intern}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="Card-Topic">Intern Role</div>
        </div>
        <div className="Card">
          <div className="img">
            <img
              src={mentor}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="Card-Topic">Mentoring Requirement</div>
        </div>
        <div className="Card">
          <div className="img">
            <img
              src={funding}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="Card-Topic">Funding Requirement</div>
        </div>
        <div className="Card">
          <div className="img">
            <img
              src={connect}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="Card-Topic">Connect with us!</div>
        </div>
      </div>
    </div>
  );
}

export default Requirements;
