import React from "react";
// import { Link } from 'react-router-dom'
import "./AboutStartupSummary.css";
import fund from "./Images/fund.png";
import contact from "./Images/contact.png";
import ideas from "./Images/ideas.png";
import irr from "./Images/irr.png";

function Financials() {
  return (
    <div>
      <div className="Content">
        <div className="Card">
          <div className="img">
            <img
              src={fund}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="Card-Topic">
            Rounds of fundraising taken <br />
            Series B
          </div>
        </div>
        <div className="Card">
          <div className="img">
            <img
              src={irr}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="Card-Topic">
            Rate of Return <br />
            (IRR)
          </div>
        </div>
        <div className="Card">
          <div className="img">
            <img
              src={ideas}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="Card-Topic">Ideas</div>
        </div>
        <div className="Card">
          <div className="img">
            <img
              src={contact}
              alt="Logo"
              style={{ height: "140px", width: "140px" }}
            />
          </div>
          <div className="Card-Topic">Contact Us</div>
        </div>
      </div>
    </div>
  );
}

export default Financials;
