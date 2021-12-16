import React from "react";
import "./SettingsHistory.css";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

function History() {
  return (
    <div className="settingshistory">
      <HistoryOutlinedIcon />
      <div className="settingshistory__content">
        <h2>Search History</h2>
        <h3>Remember your Previous Actions</h3>
      </div>
    </div>
  );
}

export default History;
