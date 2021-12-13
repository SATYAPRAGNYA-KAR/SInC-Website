import React from "react";
import "./SettingsNewPrivacyHighlighted.css";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";

function PrivacyHighlighted() {
  return (
    <div className="privacyhighlighted">
      <PrivacyTipOutlinedIcon />
      <div className="privacyhighlighted__content">
        <h2>Privacy</h2>
        <h3>Change your confidentiality</h3>
      </div>
      <hr />
    </div>
  );
}

export default PrivacyHighlighted;
