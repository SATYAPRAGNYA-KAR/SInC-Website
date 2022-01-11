import React from "react";
import "./SettingsNewDelete.css";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";
import { Link } from "react-router-dom";

function Delete() {
  return (
    <Link to="/settingsnew/deletepath" style={{ textDecoration: "none" }}>
      <div className="settingsnewdelete">
        <NoAccountsOutlinedIcon />
        <div className="settingsnewdelete__content">
          <h2>Delete Account</h2>
          <h3>Delete your Info</h3>
        </div>
      </div>
    </Link>
  );
}

export default Delete;
