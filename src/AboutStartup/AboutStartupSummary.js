import React from "react";
// import { Link } from 'react-router-dom'
import "./AboutStartupSummary.css";
import awards from "./Images/awards.png";
import business from "./Images/business-addressed-problem.png";
import contact from "./Images/contact-us.png";
import ideas from "./Images/ideas.png";
import target from "./Images/target-population.png";
import Header from "./AboutStartupHeader";

function Summary() {
  return (
    <div>
      <Header />
      <div className="aboutstartupsummaryContent">
        <div className="aboutstartupsummaryCard">
          <div className="aboutstartupsummaryimg">
            <img
              src={business}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupsummaryCard-Topic">
            Business Addressed problem
          </div>
        </div>
        <div className="aboutstartupsummaryCard">
          <div className="aboutstartupsummaryimg">
            <img
              src={target}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupsummaryCard-Topic">Target Population</div>
        </div>
        <div className="aboutstartupsummaryCard">
          <div className="aboutstartupsummaryimg">
            <img
              src={ideas}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupsummaryCard-Topic">Ideas</div>
        </div>
        <div className="aboutstartupsummaryCard">
          <div className="aboutstartupsummaryimg">
            <img
              src={contact}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupsummaryCard-Topic">Contact Us</div>
        </div>
        <div className="aboutstartupsummaryCard">
          <div className="aboutstartupsummaryimg">
            <img
              src={awards}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupsummaryCard-Topic">Awards</div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
