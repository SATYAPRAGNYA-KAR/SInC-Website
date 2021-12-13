import React from "react";
import "./SettingsNewHistorySidebar.css";
import Privacy from "./SettingsNewPrivacy";
import Password from "./SettingsNewPassword";
import Delete from "./SettingsNewDelete";
import Friend from "./SettingsNewFriend";
import HistoryHighlighted from "./SettingsNewHistoryHighlighted";
import Info from "./SettingsNewInfo";

function HistorySidebar() {
  return (
    <div className="historysidebar">
      <Privacy />
      <Password />
      <Delete />
      <Friend />
      <HistoryHighlighted />
      <Info />
    </div>
  );
}

export default HistorySidebar;
