import React from "react";
import "./SettingsNewPassword.css";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { Link } from "react-router-dom";

function Password() {
  return (
    <Link to="/passwordpath" style={{ textDecoration: "none" }}>
      <div className="password">
        <VpnKeyOutlinedIcon />
        <div className="password__content">
          <h2>Password Settings</h2>
          <h3>Configure Password, PIN, etc.</h3>
        </div>
      </div>
    </Link>
  );
}

export default Password;
