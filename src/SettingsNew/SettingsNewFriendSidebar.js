import React from "react";
import "./SettingsNewFriendSidebar.css";
import Privacy from "./SettingsNewPrivacy";
import Password from "./SettingsNewPassword";
import Delete from "./SettingsNewDelete";
import FriendHighlighted from "./SettingsNewFriendHighlighted";
import History from "./SettingsNewHistory";
import Info from "./SettingsNewInfo";

function FriendSidebar() {
  return (
    <div className="settingsnewfriendsidebar">
      <Privacy />
      <Password />
      <Delete />
      <FriendHighlighted />
      <History />
      <Info />
    </div>
  );
}

export default FriendSidebar;
