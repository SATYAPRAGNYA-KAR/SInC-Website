import React from "react";
import "./SettingsNewFriendHighlighted.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function FriendHighlighted() {
  return (
    <div className="settingsnewfriendhighlighted">
      <AccountCircleOutlinedIcon />
      <div className="settingsnewfriendhighlighted__content">
        <h2>Invite your Friend</h2>
        <h3>Customize your List</h3>
      </div>
      <hr />
    </div>
  );
}

export default FriendHighlighted;
