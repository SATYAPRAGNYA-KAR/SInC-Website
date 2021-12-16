import React from "react";
import "./FAQsHeader.css";
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
          <h4 style={{ color: "white" }}>Home</h4>
        </Link>
        <h4 style={{ color: "white" }}>Initiatives</h4>
        <Link to="/startupinsight" style={{ textDecoration: "none" }}>
          <h4 style={{ color: "white" }}>Startup Insight</h4>
        </Link>

        <h4 style={{ color: "white" }}>Team</h4>
        <hr />
        <Link to="/contactus" style={{ textDecoration: "none" }}>
          <h4 style={{ color: "white" }}>Contact Us</h4>
        </Link>
        <Link to="/faqs" style={{ textDecoration: "none" }}>
          <h4 style={{ color: "yellow" }}>FAQ's</h4>
        </Link>
        <Link to="/registerpage" style={{ textDecoration: "none" }}>
          <h4 style={{ color: "white" }}>Register</h4>
        </Link>
        <h4 style={{ color: "white" }}>Login</h4>
      </div>
    </div>
  );
}

export default Header;
