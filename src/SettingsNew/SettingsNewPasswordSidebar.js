import React from "react";
import "./SettingsNewPasswordSidebar.css";
import Privacy from "./SettingsNewPrivacy";
import PasswordHighlighted from "./SettingsNewPasswordHighlighted";
import Delete from "./SettingsNewDelete";
import Friend from "./SettingsNewFriend";
import History from "./SettingsNewHistory";
import Info from "./SettingsNewInfo";

function PasswordSidebar() {
  return (
    <div className="settingsnewpasswordsidebar">
      <Privacy />
      <PasswordHighlighted />
      <Delete />
      <Friend />
      <History />
      <Info />
    </div>
  );
}

export default PasswordSidebar;
