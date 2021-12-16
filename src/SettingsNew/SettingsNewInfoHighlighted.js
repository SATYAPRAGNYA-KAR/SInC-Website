import React from "react";
import "./SettingsNewInfoHighlighted.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function InfoHighlighted() {
  return (
    <div className="settingsnewinfohighlighted">
      <InfoOutlinedIcon />
      <div className="settingsnewinfohighlighted__content">
        <h2>About Us</h2>
        <h3>Find out more about SInC</h3>
      </div>
      <hr />
    </div>
  );
}

export default InfoHighlighted;
