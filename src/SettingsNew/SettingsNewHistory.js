import React from "react";
import "./SettingsNewHistory.css";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import { Link } from "react-router-dom";

function History() {
  return (
    <Link to="/settingsnew/historypath" style={{ textDecoration: "none" }}>
      <div className="settingsnewhistory">
        <HistoryOutlinedIcon />
        <div className="settingsnewhistory__content">
          <h2>Search History</h2>
          <h3>Remember your Previous Actions</h3>
        </div>
      </div>
    </Link>
  );
}

export default History;
