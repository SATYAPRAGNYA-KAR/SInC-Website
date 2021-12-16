import React from "react";
import "./SettingsNewDeleteHighlighted.css";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";

function DeleteHighlighted() {
  return (
    <div className="settingsnewdeletehighlighted">
      <NoAccountsOutlinedIcon />
      <div className="settingsnewdeletehighlighted__content">
        <h2>Delete Account</h2>
        <h3>Delete your Info</h3>
      </div>
      <hr />
    </div>
  );
}

export default DeleteHighlighted;
