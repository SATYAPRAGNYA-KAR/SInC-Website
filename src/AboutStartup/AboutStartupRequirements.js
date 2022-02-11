import React from "react";
import { Link } from 'react-router-dom'
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
        <li className="aboutstartupheaderli-n">
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
        <li className="aboutstartupheaderli-a">
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
              src={intern}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupsummaryCard-Topic">Intern Role</div>
        </div>
        <div className="aboutstartupsummaryCard">
          <div className="aboutstartupsummaryimg">
            <img
              src={mentor}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupsummaryCard-Topic">
            Mentoring Requirement
          </div>
        </div>
        <div className="aboutstartupsummaryCard">
          <div className="aboutstartupsummaryimg">
            <img
              src={funding}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupsummaryCard-Topic">
            Funding Requirement
          </div>
        </div>
        <div className="aboutstartupsummaryCard">
          <div className="aboutstartupsummaryimg">
            <img
              src={connect}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupsummaryCard-Topic">
            Connect with us!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requirements;
