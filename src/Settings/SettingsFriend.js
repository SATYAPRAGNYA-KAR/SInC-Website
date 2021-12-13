import React from "react";
import "./SettingsFriend.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Friend() {
  return (
    <div className="friend">
      <AccountCircleOutlinedIcon />
      <div className="friend__content">
        <h2>Invite your Friend</h2>
        <h3>Customize your List</h3>
      </div>
    </div>
  );
}

export default Friend;
