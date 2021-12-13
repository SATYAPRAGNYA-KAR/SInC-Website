import React from "react";
// import { Link } from 'react-router-dom'
import "./AboutStartupSummary.css";
import awards from "./Images/awards.png";
import business from "./Images/business-addressed-problem.png";
import contact from "./Images/contact-us.png";
import ideas from "./Images/ideas.png";
import target from "./Images/target-population.png";

function Summary() {
  return (
    <div>
      <div className="Content">
        <div className="Card">
          <div className="img">
            <img
              src={business}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="Card-Topic">Business Addressed problem</div>
        </div>
        <div className="Card">
          <div className="img">
            <img
              src={target}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="Card-Topic">Target Population</div>
        </div>
        <div className="Card">
          <div className="img">
            <img
              src={ideas}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="Card-Topic">Ideas</div>
        </div>
        <div className="Card">
          <div className="img">
            <img
              src={contact}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="Card-Topic">Contact Us</div>
        </div>
        <div className="Card">
          <div className="img">
            <img
              src={awards}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="Card-Topic">Awards</div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
