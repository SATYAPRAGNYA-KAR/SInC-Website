import React from "react";
import "./EntrepreneurshipKickstartHeader.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="faqsheader">
      <div className="faqsheader__left">
        <div className="faqsheaderimg__container">
          <img
            src="https://media-exp1.licdn.com/dms/image/C510BAQE16x5t0uDm4Q/company-logo_200_200/0/1568468276035?e=2159024400&v=beta&t=Kno3pclqtMRNpav1Lx1hQ4YGsuWKSFHpIISiogua5wc"
            alt="SInC Logo"
          />
        </div>
        <h2>Student Incubation Cell</h2>
      </div>
      <div className="faqsheader__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="faqsheader__right__home">
            <h4 style={{ color: "white" }}>Home</h4>
          </div>
        </Link>
        <div className="faqsheader__right__initiatives">
          <h4 style={{ color: "white" }}>Initiatives</h4>
        </div>
        <Link to="/startupinsight" style={{ textDecoration: "none" }}>
          <div className="faqsheader__right__startupinsight">
            <h4 style={{ color: "white" }}>Startup Insight</h4>
          </div>
        </Link>
        <div className="faqsheader__right__team">
          <h4 style={{ color: "white" }}>Team</h4>
        </div>
        <hr />
        <Link to="/contactus" style={{ textDecoration: "none" }}>
          <div className="faqsheader__right__contact">
            <h4 style={{ color: "white" }}>Contact Us</h4>
          </div>
        </Link>
        <Link to="/faqs" style={{ textDecoration: "none" }}>
          <div className="faqsheader__right__faqs">
            <h4 style={{ color: "yellow" }}>FAQ's</h4>
          </div>
        </Link>
        <Link to="/registerpage" style={{ textDecoration: "none" }}>
          <div className="faqsheader__right__register">
            <h4 style={{ color: "white" }}>Register</h4>
          </div>
        </Link>
        <div className="faqsheader__right__login">
          <h4 style={{ color: "white" }}>Login</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
