import React from "react";
import "./EntrepreneurshipKickstartFooter.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="faqsfooter">
      <div className="faqsfooter__left">
        <h2>IIT Delhi, Hauz Khas, New Delhi</h2>
      </div>
      <div className="faqsfooter__right">
        <div className="faqsfootericon__container">
          <FacebookIcon />
        </div>
        <div className="faqsfootericon__container">
          <TwitterIcon />
        </div>
        <div className="faqsfootericon__container">
          <InstagramIcon />
        </div>
        <div className="faqsfootericon__container">
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
