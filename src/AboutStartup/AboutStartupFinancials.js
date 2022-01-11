import React from "react";
// import { Link } from 'react-router-dom'
import "./AboutStartupSummary.css";
import fund from "./Images/fund.png";
import contact from "./Images/contact.png";
import ideas from "./Images/ideas.png";
import irr from "./Images/irr.png";
import Header from "./AboutStartupHeader";

function Financials() {
  return (
    <div>
      <Header />
      <div className="aboutstartupfinancialsContent">
        <div className="aboutstartupfinancialsCard">
          <div className="aboutstartupfinancialsimg">
            <img
              src={fund}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupfinancialsCard-Topic">
            Rounds of fundraising taken <br />
            Series B
          </div>
        </div>
        <div className="aboutstartupfinancialsCard">
          <div className="aboutstartupfinancialsimg">
            <img
              src={irr}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupfinancialsCard-Topic">
            Rate of Return <br />
            (IRR)
          </div>
        </div>
        <div className="aboutstartupfinancialsCard">
          <div className="aboutstartupfinancialsimg">
            <img
              src={ideas}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupfinancialsCard-Topic">Ideas</div>
        </div>
        <div className="aboutstartupfinancialsCard">
          <div className="aboutstartupfinancialsimg">
            <img
              src={contact}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="aboutstartupfinancialsCard-Topic">Contact Us</div>
        </div>
      </div>
    </div>
  );
}

export default Financials;
