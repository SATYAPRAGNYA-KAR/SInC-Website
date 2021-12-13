import React from "react";
import "./SettingsNewDeleteHighlighted.css";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";

function DeleteHighlighted() {
  return (
    <div className="deletehighlighted">
      <NoAccountsOutlinedIcon />
      <div className="deletehighlighted__content">
        <h2>Delete Account</h2>
        <h3>Delete your Info</h3>
      </div>
      <hr />
    </div>
  );
}

export default DeleteHighlighted;
