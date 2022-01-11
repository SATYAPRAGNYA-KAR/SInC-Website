import React from "react";
import "./LoginHeader.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="loginheader">
      <div className="loginheader__left">
        <Link to="/">
          <div className="loginheaderimg__container">
            <img
              src="https://media-exp1.licdn.com/dms/image/C510BAQE16x5t0uDm4Q/company-logo_200_200/0/1568468276035?e=2159024400&v=beta&t=Kno3pclqtMRNpav1Lx1hQ4YGsuWKSFHpIISiogua5wc"
              alt="SInC Logo"
            />
          </div>
        </Link>
        <h2>Student Incubation Cell</h2>
      </div>
      <div className="loginheader__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="loginheader__right__home">
            <h4 style={{ color: "white" }}>Home</h4>
          </div>
        </Link>
        {/* <div className="loginheader__right__initiatives">
          <h4 style={{ color: "white" }}>Initiatives</h4>
        </div> */}
        <div className="loginheader__right__initiative__dropdown">
          <span
            className="loginheader__right__initiative__dropbutton"
            style={{ color: "white" }}
          >
            Initiatives
          </span>
          <div className="loginheader__right__initiative__dropdowncontent">
            <a href="/entrepreneurshipkickstart">Entrepreneurship Kickstart</a>
            <a href="/iitdangelnetwork">IITD Angel Network</a>
          </div>
        </div>
        <Link to="/startupinsight" style={{ textDecoration: "none" }}>
          <div className="loginheader__right__startupinsight">
            <h4 style={{ color: "white" }}>Startup Insight</h4>
          </div>
        </Link>
        <div className="loginheader__right__team">
          <h4 style={{ color: "white" }}>Team</h4>
        </div>
        <hr />
        <Link to="/contactus" style={{ textDecoration: "none" }}>
          <div className="loginheader__right__contact">
            <h4 style={{ color: "white" }}>Contact Us</h4>
          </div>
        </Link>
        <Link to="/faqs" style={{ textDecoration: "none" }}>
          <div className="loginheader__right__login">
            <h4 style={{ color: "white" }}>FAQ's</h4>
          </div>
        </Link>
        <Link to="/registerpage" style={{ textDecoration: "none" }}>
          <div className="loginheader__right__login">
            <h4 style={{ color: "white" }}>Register</h4>
          </div>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="loginheader__right__login">
            <h4 style={{ color: "yellow" }}>Login</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
