import React from "react";
import "./ContactUsFooter.css";
import email from "./images/Images/email.png";
import f from "./images/Images/f.png";
import ig from "./images/Images/ig.png";
import bird from "./images/Images/bird.png";

function Footer() {
  return (
    <div className="registerpagefooter">
      <div className="registerpagefooter-left">
        <img src={email} alt="" />
        <h4 className="registerpagefooterspan" style={{ marginLeft: "10px" }}>
          xyz@abc.com
        </h4>
      </div>
      <div className="registerpagefooter-center">
        <span className="registerpagefooterspan">
          Designed by Tech and Design Team
        </span>
        <span className="registerpagefooterspan">SInC@2021</span>
      </div>
      <div className="registerpagefooter-right">
        <img
          src={f}
          alt=""
          style={{ marginLeft: "10px", width: "20px", height: "20px" }}
        />
        <img
          src={bird}
          alt=""
          style={{ marginLeft: "10px", width: "25px", height: "25px" }}
        />
        <img
          src={ig}
          alt=""
          style={{ marginLeft: "10px", width: "25px", height: "25px" }}
        />
      </div>
    </div>
  );
}

export default Footer;
