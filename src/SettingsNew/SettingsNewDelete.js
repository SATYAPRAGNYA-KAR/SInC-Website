import React from "react";
import "./SettingsNewDelete.css";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";
import { Link } from "react-router-dom";

function Delete() {
  return (
    <Link to="/deletepath" style={{ textDecoration: "none" }}>
      <div className="delete">
        <NoAccountsOutlinedIcon />
        <div className="delete__content">
          <h2>Delete Account</h2>
          <h3>Delete your Info</h3>
        </div>
      </div>
    </Link>
  );
}

export default Delete;
