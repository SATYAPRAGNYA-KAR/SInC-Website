import React from "react";
import "./SettingsNewDeleteSidebar.css";
import Privacy from "./SettingsNewPrivacy";
import Password from "./SettingsNewPassword";
import DeleteHighlighted from "./SettingsNewDeleteHighlighted";
import Friend from "./SettingsNewFriend";
import History from "./SettingsNewHistory";
import Info from "./SettingsNewInfo";

function DeleteSidebar() {
  return (
    <div className="settingsnewdeletesidebar">
      <Privacy />
      <Password />
      <DeleteHighlighted />
      <Friend />
      <History />
      <Info />
    </div>
  );
}

export default DeleteSidebar;
