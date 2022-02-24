import React from "react";
import "./ContactUsHeader.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="contactusheader">
      <div className="contactusheader__left">
        <Link to="/">
          <div className="contactusheaderimg__container">
            <img
              src="https://media-exp1.licdn.com/dms/image/C510BAQE16x5t0uDm4Q/company-logo_200_200/0/1568468276035?e=2159024400&v=beta&t=Kno3pclqtMRNpav1Lx1hQ4YGsuWKSFHpIISiogua5wc"
              alt="SInC Logo"
            />
          </div>
        </Link>
        <h2>Student Incubation Cell</h2>
      </div>
      <div className="contactusheader__right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="contactusheader__right__home">
            <h4 style={{ color: "white" }}>Home</h4>
          </div>
        </Link>
        {/* <div className="contactusheader__right__initiatives">
          <h4 style={{ color: "white" }}>Initiatives</h4>
        </div> */}
        <div className="contactusheader__right__initiative__dropdown">
          <span
            className="contactusheader__right__initiative__dropbutton"
            style={{ color: "white" }}
          >
            Initiatives
          </span>
          <div className="contactusheader__right__initiative__dropdowncontent">
            <Link
              to="/entrepreneurshipkickstart"
              style={{ textDecoration: "none" }}
            >
              <div className="contactusheader__dropdownboxes">
                Entrepreneurship Kickstart
              </div>
            </Link>
            <Link to="/iitdangelnetwork" style={{ textDecoration: "none" }}>
              <div className="contactusheader__dropdownboxes">
                IITD Angel Network
              </div>
            </Link>
            <Link to="/preincubationplan" style={{ textDecoration: "none" }}>
              <div className="contactusheader__dropdownboxes">
                Pre PreIncubationPlan
              </div>
            </Link>
          </div>
        </div>
        <Link to="/startupinsight" style={{ textDecoration: "none" }}>
          <div className="contactusheader__right__startupinsight">
            <h4 style={{ color: "white" }}>Startup Insight</h4>
          </div>
        </Link>
        <Link to="/team" style={{ textDecoration: "none" }}>
          <div className="contactusheader__right__team">
            <h4 style={{ color: "white" }}>Team</h4>
          </div>
        </Link>
        <hr />
        <Link to="/contactus" style={{ textDecoration: "none" }}>
          <div className="contactusheader__right__contact">
            <h4 style={{ color: "yellow" }}>Contact Us</h4>
          </div>
        </Link>
        <Link to="/faqs" style={{ textDecoration: "none" }}>
          <div className="contactusheader__right__home">
            <h4 style={{ color: "white" }}>FAQs</h4>
          </div>
        </Link>
        <Link to="/registerpage" style={{ textDecoration: "none" }}>
          <div className="contactusheader__right__home">
            <h4 style={{ color: "white" }}>Register</h4>
          </div>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="contactusheader__right__home">
            <h4 style={{ color: "white" }}>Login</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;