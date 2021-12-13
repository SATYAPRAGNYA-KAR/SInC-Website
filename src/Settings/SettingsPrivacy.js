import React from "react";
import "./SettingsPrivacy.css";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";

function Privacy() {
  return (
    <div className="privacy">
      <PrivacyTipOutlinedIcon />
      <div className="privacy__content">
        <h2>Privacy</h2>
        <h3>Change your confidentiality</h3>
      </div>
    </div>
  );
}

export default Privacy;
