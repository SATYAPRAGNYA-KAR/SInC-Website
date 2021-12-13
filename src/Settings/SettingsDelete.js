import React from "react";
import "./SettingsDelete.css";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";

function Delete() {
  return (
    <div className="delete">
      <NoAccountsOutlinedIcon />
      <div className="delete__content">
        <h2>Delete Account</h2>
        <h3>Delete your Info</h3>
      </div>
    </div>
  );
}

export default Delete;
