import React from "react";
import "./SettingsBody.css";
import Sidebar from "./SettingsSidebar";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function Body() {
  return (
    <div className="settingsbody">
      <div className="settingsbody__head">
        <SettingsOutlinedIcon />
        <h2>Settings</h2>
      </div>
      <div className="settingsbody__content">
        <Sidebar />
        <div className="settingsbodymainbox"></div>
      </div>
    </div>
  );
}

export default Body;
