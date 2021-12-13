import React from "react";
import "./SettingsNewFriend.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

function Friend() {
  return (
    <Link to="/friendpath" style={{ textDecoration: "none" }}>
      <div className="friend">
        <AccountCircleOutlinedIcon />
        <div className="friend__content">
          <h2>Invite your Friend</h2>
          <h3>Customize your List</h3>
        </div>
      </div>
    </Link>
  );
}

export default Friend;
