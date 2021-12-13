import React from "react";
import "./SideNavigationBarSettings.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function Settings() {
  return (
    <div>
      <div className="settings">
        <SettingsOutlinedIcon />
        <h3>Settings</h3>
      </div>
    </div>
  );
}

export default Settings;
