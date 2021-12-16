import React from "react";
import "./SettingsNewSidebar.css";
import Privacy from "./SettingsNewPrivacy";
import Password from "./SettingsNewPassword";
import Delete from "./SettingsNewDelete";
import Friend from "./SettingsNewFriend";
import History from "./SettingsNewHistory";
import Info from "./SettingsNewInfo";

function Sidebar() {
  return (
    <div className="settingsnewsidebar">
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
