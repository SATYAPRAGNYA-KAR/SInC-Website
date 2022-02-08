import React from "react";
import "./TeamHeader.css";
import sinc from "./sinc.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="teamheader">
      <div className="teamheader-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={sinc} alt="" style={{ height: "40px", width: "40px" }} />
        </Link>
        <h2 className="teamheader-content" style={{ marginLeft: "10px" }}>
          Student Incubation Cell
        </h2>
      </div>
      <div className="teamheader-right">
        <div className="teamheader-right-left">
          <span>Home</span>
          <span>Startup Insight</span>
          <span>Initiatives</span>
          <span>Team</span>
        </div>
        <div className="teamheader-right-right">
          <span>Contact Us</span>
          <span>FAQ's</span>
          <span>Login</span>
          <span>Register</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
