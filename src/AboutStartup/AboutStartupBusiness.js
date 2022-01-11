import React from "react";
// import { Link } from 'react-router-dom'
import "./AboutStartupSummary.css";
import activities from "./Images/activities.png";
import resources from "./Images/resources.png";
import value from "./Images/value.png";
import partners from "./Images/partner.png";
import Header from "./AboutStartupHeader";

function Business() {
  return (
    <div>
      <Header />
      <div className="aboutstartupbusinessContent">
        <div className="aboutstartupbusinessCard">
          <div className="aboutstartupbusinessimg">
            <img
              src={partners}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupbusinessCard-Topic">Key Partners</div>
        </div>
        <div className="aboutstartupbusinessCard">
          <div className="aboutstartupbusinessimg">
            <img
              src={activities}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupbusinessCard-Topic">Key Activities</div>
        </div>
        <div className="aboutstartupbusinessCard">
          <div className="aboutstartupbusinessimg">
            <img
              src={value}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupbusinessCard-Topic">
            Value Proposition
          </div>
        </div>
        <div className="aboutstartupbusinessCard">
          <div className="aboutstartupbusinessimg">
            <img
              src={resources}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupbusinessCard-Topic">Key Resources</div>
        </div>
      </div>
    </div>
  );
}

export default Business;
