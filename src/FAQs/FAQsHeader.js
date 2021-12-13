import React from "react";
import "./FAQsHeader.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="img__container">
          <img
            src="https://media-exp1.licdn.com/dms/image/C510BAQE16x5t0uDm4Q/company-logo_200_200/0/1568468276035?e=2159024400&v=beta&t=Kno3pclqtMRNpav1Lx1hQ4YGsuWKSFHpIISiogua5wc"
            alt="SInC Logo"
          />
        </div>
        <h2>Student Incubation Cell</h2>
      </div>
      <div className="header__right">
        <h4>Home</h4>
        <h4>Initiatives</h4>
        <h4>Startup Insight</h4>
        <h4>Team</h4>
        <hr />
        <h4>Contact Us</h4>
        <h4>FAQs</h4>
        <h4>Register</h4>
        <h4>Login</h4>
      </div>
    </div>
  );
}

export default Header;
