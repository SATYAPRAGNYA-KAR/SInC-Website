import React from "react";
import "./SettingsNewPasswordHighlighted.css";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";

function PasswordHighlighted() {
  return (
    <div className="settingsnewpasswordhighlighted">
      <VpnKeyOutlinedIcon />
      <div className="settingsnewpasswordhighlighted__content">
        <h2>Password Settings</h2>
        <h3>Configure Password, PIN, etc.</h3>
      </div>
      <hr />
    </div>
  );
}

export default PasswordHighlighted;
