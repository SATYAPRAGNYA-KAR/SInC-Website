import React from "react";
import "./SideNavigationBarSettings.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";

function Settings() {
  return (
    <div>
      <Link to="/settings" style={{ textDecoration: "none" }}>
        <div className="sidenavigationbarsettings">
          <SettingsOutlinedIcon />
          <h3>Settings</h3>
        </div>
      </Link>
    </div>
  );
}

export default Settings;
