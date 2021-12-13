import React from "react";
import "./SettingsNewInfoHighlighted.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function InfoHighlighted() {
  return (
    <div className="infohighlighted">
      <InfoOutlinedIcon />
      <div className="infohighlighted__content">
        <h2>About Us</h2>
        <h3>Find out more about SInC</h3>
      </div>
      <hr />
    </div>
  );
}

export default InfoHighlighted;
