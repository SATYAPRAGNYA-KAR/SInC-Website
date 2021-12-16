import React from "react";
import "./SettingsNewInfoSidebar.css";
import Privacy from "./SettingsNewPrivacy";
import Password from "./SettingsNewPassword";
import Delete from "./SettingsNewDelete";
import Friend from "./SettingsNewFriend";
import History from "./SettingsNewHistory";
import InfoHighlighted from "./SettingsNewInfoHighlighted";

function InfoSidebar() {
  return (
    <div className="settingsnewinfosidebar">
      <Privacy />
      <Password />
      <Delete />
      <Friend />
      <History />
      <InfoHighlighted />
    </div>
  );
}

export default InfoSidebar;
