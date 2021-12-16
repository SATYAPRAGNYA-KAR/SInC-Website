import React from "react";
import "./SettingsInfo.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Info() {
  return (
    <div className="settingsinfo">
      <InfoOutlinedIcon />
      <div className="settingsinfo__content">
        <h2>About Us</h2>
        <h3>Find out more about SInC</h3>
      </div>
    </div>
  );
}

export default Info;
