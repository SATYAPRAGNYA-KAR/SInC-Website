import React from "react";
import { Link } from 'react-router-dom'
import "./AboutStartupTeam.css";
import Header from "./AboutStartupHeader";

function Team() {
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
        <li className="aboutstartupheaderli-a">
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

    </div>
  );
}

export default Team;
