import React from "react";
import { Link } from 'react-router-dom'
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

      <ul className="aboutstartupheadernav">
        <li className="aboutstartupheaderli-n">
          <Link
            to="/aboutstartup"
            style={{ textDecoration: "None", fontSize: "20px", color: "black" }}
          >
            Summary
          </Link>
        </li>
        <li className="aboutstartupheaderli-n">
          <Link
            to="/aboutstartup/Team"
            style={{ textDecoration: "None", fontSize: "20px", color: "black" }}
          >
            Team
          </Link>
        </li>
        <li className="aboutstartupheaderli-n">
          <Link
            to="/aboutstartup/Financials"
            style={{ textDecoration: "None", fontSize: "20px", color: "black" }}
          >
            Financials
          </Link>
        </li>
        <li className="aboutstartupheaderli-a">
          <Link
            to="/aboutstartup/Business"
            style={{ textDecoration: "None", fontSize: "20px", color: "black" }}
          >
            Business
          </Link>
        </li>
        <li className="aboutstartupheaderli-n">
          <Link
            to="/aboutstartup"
            // to="/aboutstartup/Products" No such file as Product.js here
            style={{ textDecoration: "None", fontSize: "20px", color: "black" }}
          >
            Products
          </Link>
        </li>
        <li className="aboutstartupheaderli-n">
          <Link
            to="/aboutstartup/Requirements"
            style={{ textDecoration: "None", fontSize: "20px", color: "black" }}
          >
            Requirements
          </Link>
        </li>
      </ul>
      <hr
        style={{ height: "4px", color: "red", backgroundColor: "red" }}
        id="aboutstartupheaderhr"
      />

      <div className="aboutstartupsummaryContent">
        <div className="aboutstartupsummaryCard">
          <div className="aboutstartupsummaryimg">
            <img
              src={partners}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupsummaryCard-Topic">Key Partners</div>
        </div>
        <div className="aboutstartupsummaryCard">
          <div className="aboutstartupsummaryimg">
            <img
              src={activities}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupsummaryCard-Topic">Key Activities</div>
        </div>
        <div className="aboutstartupsummaryCard">
          <div className="aboutstartupsummaryimg">
            <img
              src={value}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupsummaryCard-Topic">
            Value Proposition
          </div>
        </div>
        <div className="aboutstartupsummaryCard">
          <div className="aboutstartupsummaryimg">
            <img
              src={resources}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupsummaryCard-Topic">Key Resources</div>
        </div>
      </div>
    </div>
  );
}

export default Business;
