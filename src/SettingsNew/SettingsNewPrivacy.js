import React from "react";
import "./SettingsNewPrivacy.css";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <Link to="/privacypath" style={{ textDecoration: "none" }}>
      <div className="privacy">
        <PrivacyTipOutlinedIcon />
        <div className="privacy__content">
          <h2>Privacy</h2>
          <h3>Change your confidentiality</h3>
        </div>
      </div>
    </Link>
  );
}

export default Privacy;
