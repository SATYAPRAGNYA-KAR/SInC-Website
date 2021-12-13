import React from "react";
import "./SettingsBody.css";
import Sidebar from "./SettingsSidebar";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function Body() {
  return (
    <div className="body">
      <div className="body__head">
        <SettingsOutlinedIcon />
        <h2>Settings</h2>
      </div>
      <div className="body__content">
        <Sidebar />
        <div className="mainbox"></div>
      </div>
    </div>
  );
}

export default Body;
