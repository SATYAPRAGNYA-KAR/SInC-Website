import React from "react";
import "./SettingsNewHistoryHighlighted.css";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

function HistoryHighlighted() {
  return (
    <div className="settingsnewhistoryhighlighted">
      <HistoryOutlinedIcon />
      <div className="settingsnewhistoryhighlighted__content">
        <h2>Search History</h2>
        <h3>Remember your Previous Actions</h3>
      </div>
      <hr />
    </div>
  );
}

export default HistoryHighlighted;
