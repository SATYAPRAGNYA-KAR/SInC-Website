import React from "react";
import "./SettingsPassword.css";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";

function Password() {
  return (
    <div className="settingspassword">
      <VpnKeyOutlinedIcon />
      <div className="settingspassword__content">
        <h2>Password Settings</h2>
        <h3>Configure Password, PIN, etc.</h3>
      </div>
    </div>
  );
}

export default Password;
