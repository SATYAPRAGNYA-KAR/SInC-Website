import React from "react";
import "./SettingsNewFriendHome.css";
import FriendSidebar from "./SettingsNewFriendSidebar";
import FriendMainbox from "./SettingsNewFriendMainbox";

function FriendHome() {
  return (
    <div className="friendhome">
      <FriendSidebar />
      <FriendMainbox />
    </div>
  );
}

export default FriendHome;
