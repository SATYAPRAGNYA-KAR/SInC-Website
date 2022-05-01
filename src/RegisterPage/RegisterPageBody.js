import React from "react";
import "./RegisterPageBody.css";
import capa from "./Images/capa.png";
import cloud from "./Images/cloud.png";
import rr from "./Images/rr.png";
import rl from "./Images/rl.png";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="registerpagebody">
      <div className="registerpagebodyreg">
        <img src={rl} alt="" style={{ height: "100%" }} />
      </div>
      <div className = "registerpage_boxes">
        <div className="registerpagebody-tag">
          <div className ="registerpagebody-tag-top">LOREM IPSUM</div>
          <div className="registerpagebody-tag-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <Link to="/registrationform" style={{ textDecoration: "none" }}>
            <div className="registerpagebody-tag-bottom">REGISTER</div>
          </Link>
        </div>
        <div className="registerpagebody-tag">
          <div className="registerpagebody-tag-top">LOREM IPSUM</div>
          <div className="registerpagebody-tag-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <Link to="/startupsregistrationform" style={{ textDecoration: "none" }}>
            <div className="registerpagebody-tag-bottom">REGISTER</div>
          </Link>
        </div>
        </div>
        <div className="registerpagebody-img">
          <img src={capa} alt="" style={{ width: "140px", height: "150px" }} />
          <img src={cloud} alt="" style={{ width: "200px", height: "160px" }} />
        </div>
        <div className="registerpagebodyreg">
          <img src={rr} alt="" style={{ height: "100%" }} />
        </div>
        
    </div>
  );
}

export default Body;
