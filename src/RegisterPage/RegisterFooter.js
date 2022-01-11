import React from "react";
import "./RegisterFooter.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="registerfooter">
      <div className="registerfooter__left">
        <h2>IIT Delhi, Hauz Khas, New Delhi</h2>
      </div>
      <div className="registerfooter__right">
        <a href="https://www.facebook.com/sinciitd" style={{ color: "white" }}>
          <div className="registerfootericon__container">
            <FacebookIcon />
          </div>
        </a>
        <a
          href="https://mobile.twitter.com/sinc_iitd"
          style={{ color: "white" }}
        >
          <div className="registerfootericon__container">
            <TwitterIcon />
          </div>
        </a>
        <a
          href="https://www.instagram.com/sinciitd/"
          style={{ color: "white" }}
        >
          <div className="registerfootericon__container">
            <InstagramIcon />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/sinciitd"
          style={{ color: "white" }}
        >
          <div className="registerfootericon__container">
            <LinkedInIcon />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
