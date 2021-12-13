import React from "react";
import "./FAQsFooter.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <h2>IIT Delhi, Hauz Khas, New Delhi</h2>
      </div>
      <div className="footer__right">
        <div className="icon__container">
          <FacebookIcon />
        </div>
        <div className="icon__container">
          <TwitterIcon />
        </div>
        <div className="icon__container">
          <InstagramIcon />
        </div>
        <div className="icon__container">
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
