import React from "react";
import "./StartupInsightHeader.css";
import sinc from "./sinc.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="startupinsightheader">
      <div className="startupinsightheader-left">
        <img src={sinc} alt="" style={{ height: "40px", width: "40px" }} />
        <h2
          className="startupinsightheader-content"
          style={{ marginLeft: "10px" }}
        >
          Student Incubation Cell
        </h2>
      </div>
      <div className="startupinsightheader-right">
        <div className="startupinsightheader-right-left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}>Home</span>
          </Link>
          <Link to="/startupinsight" style={{ textDecoration: "none" }}>
            <span style={{ color: "yellow" }}>Startup Insight</span>
          </Link>
          <span style={{ color: "white" }}>Initiatives</span>
          <span style={{ color: "white" }}>Team</span>
        </div>
        <div className="startupinsightheader-right-right">
          <Link to="/contactus" style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}>Contact Us</span>
          </Link>
          <Link to="/faqs" style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}>FAQ's</span>
          </Link>
          <Link to="/registerpage" style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}>Register</span>
          </Link>
          <span style={{ color: "white" }}>Login</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
