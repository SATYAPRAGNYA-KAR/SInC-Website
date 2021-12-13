import React from "react";
import "./ListOfStartupsInfocard.css";
import { BsDiscord } from "react-icons/bs";
function Infocard() {
  return (
    <div className="Infocard">
      <div className="Infocard_Discord">
        <BsDiscord size={30} />
        <span>Discord</span>
      </div>
      <div className="Infocard_About">
        <h3>About</h3>
        {/* <hr></hr> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="Infocard_MVP">
        <div className="Infocard_MVP_Inside" id="Infocard_vertical_line">
          <h3>Stage</h3>
          <p>MVP</p>
        </div>
        <div className="Infocard_MVP_Inside">
          <h3>Domain</h3>
          <p>MVP</p>
        </div>
      </div>
      <div className="Infocard_buttons">
        <button className="Infocard_buttons_button">Mentorship</button>
        <br />
        <button className="Infocard_buttons_button">Internship</button>
      </div>
    </div>
  );
}

export default Infocard;
