import React from "react";
import "./SettingsFooter.css";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <EmailIcon />
        <h2>xyz@abc.com</h2>
      </div>
      <div className="footer__center">
        <h2>
          Developed by<div className="unique">Tech Team & Design Team</div>
        </h2>
        <h3>
          SInC <span>&#169;</span> 2021
        </h3>
      </div>
      <div className="footer__right">
        <FacebookIcon />
        <YouTubeIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}

export default Footer;
