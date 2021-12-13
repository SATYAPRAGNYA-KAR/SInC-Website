import React from "react";
import "./HomepageHeader.css";
import sinc from "./sinc.png";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={sinc} alt="" style={{ height: "40px", width: "40px" }} />
        <h2 className="header-content" style={{ marginLeft: "10px" }}>
          Student Incubation Cell
        </h2>
      </div>
      <div className="header-right">
        <div className="header-right-left">
          <span>Home</span>
          <span>Startup Insight</span>
          <span>Initiatives</span>
          <span>Team</span>
        </div>
        <div className="header-right-right">
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
