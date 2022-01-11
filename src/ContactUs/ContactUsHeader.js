import React from "react";
import "./ContactUsHeader.css";
import sinc from "./sinc.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="registerpageheader">
      <div className="registerpageheader-left">
        <img src={sinc} alt="" style={{ height: "40px", width: "40px" }} />
        <h2
          className="registerpageheader-content"
          style={{ marginLeft: "10px" }}
        >
          Student Incubation Cell
        </h2>
      </div>
      <div className="registerpageheader-right">
        <div className="registerpageheader-right-left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}>Home</span>
          </Link>
          <Link to="/startupinsight" style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}>Startup Insight</span>
          </Link>
          <span style={{ color: "white" }}>Initiatives</span>
          <span style={{ color: "white" }}>Team</span>
        </div>
        <div className="registerpageheader-right-right">
          <Link to="/contactus" style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}>Contact Us</span>
          </Link>
          <Link to="/faqs" style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}>FAQ's</span>
          </Link>
          <Link to="/registerpage" style={{ textDecoration: "none" }}>
            <span style={{ color: "yellow" }}>Register</span>
          </Link>
          <span style={{ color: "white" }}>Login</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
