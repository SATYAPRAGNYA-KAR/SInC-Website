import React from "react";
import "./SettingsNewPrivacySidebar.css";
import PrivacyHighlighted from "./SettingsNewPrivacyHighlighted";
import Password from "./SettingsNewPassword";
import Delete from "./SettingsNewDelete";
import Friend from "./SettingsNewFriend";
import History from "./SettingsNewHistory";
import Info from "./SettingsNewInfo";

function PrivacySidebar() {
  return (
    <div className="settingsnewprivacysidebar">
      <PrivacyHighlighted />
      <Password />
      <Delete />
      <Friend />
      <History />
      <Info />
    </div>
  );
}

export default PrivacySidebar;
