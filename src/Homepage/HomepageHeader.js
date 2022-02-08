import React from "react";
import "./HomepageHeader.css";
import sinc from "./sinc.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="homeheader">
      <div className="homeheader-left">
        <img src={sinc} alt="" style={{ height: "40px", width: "40px" }} />
        <h2 className="homeheader-content" style={{ marginLeft: "10px" }}>
          Student Incubation Cell
        </h2>
      </div>
      <div className="homeheader-right">
        <div className="homeheader-right-left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ color: "yellow" }}>Home</span>
          </Link>
          <Link to="/startupinsight" style={{ textDecoration: "none" }}>
            <span style={{ color: "white" }}>Startup Insight</span>
          </Link>
          <div className="homepage__initiative__dropdown">
            <span
              className="homepage__initiative__dropbutton"
              style={{ color: "white" }}
            >
              Initiatives
            </span>
            <div className="homepage__initiative__dropdowncontent">
              <div>Entrepreneurship Kickstart</div>
              <div>IITD Angel Network</div>
            </div>
          </div>
          <span style={{ color: "white" }}>Team</span>
        </div>
        <div className="homeheader-right-right">
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
