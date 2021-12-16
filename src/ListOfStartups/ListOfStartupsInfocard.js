import React from "react";
import "./ListOfStartupsInfocard.css";
import { BsDiscord } from "react-icons/bs";
function Infocard() {
  return (
    <div className="listofstartupsInfocard">
      <div className="listofstartupsInfocard_Discord">
        <BsDiscord size={30} />
        <span>Discord</span>
      </div>
      <div className="listofstartupsInfocard_About">
        <h3>About</h3>
        {/* <hr></hr> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="listofstartupsInfocard_MVP">
        <div
          className="listofstartupsInfocard_MVP_Inside"
          id="listofstartupsInfocard_vertical_line"
        >
          <h3>Stage</h3>
          <p>MVP</p>
        </div>
        <div className="listofstartupsInfocard_MVP_Inside">
          <h3>Domain</h3>
          <p>MVP</p>
        </div>
      </div>
      <div className="listofstartupsInfocard_buttons">
        <button className="listofstartupsInfocard_buttons_button">
          Mentorship
        </button>
        <br />
        <button className="listofstartupsInfocard_buttons_button">
          Internship
        </button>
      </div>
    </div>
  );
}

export default Infocard;
