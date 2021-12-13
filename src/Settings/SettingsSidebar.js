import React from "react";
import "./SettingsSidebar.css";
import Privacy from "./SettingsPrivacy";
import Password from "./SettingsPassword";
import Delete from "./SettingsDelete";
import Friend from "./SettingsFriend";
import History from "./SettingsHistory";
import Info from "./SettingsInfo";

function Sidebar() {
  return (
    <div className="sidebar">
      <Privacy />
      <Password />
      <Delete />
      <Friend />
      <History />
      <Info />
    </div>
  );
}

export default Sidebar;
