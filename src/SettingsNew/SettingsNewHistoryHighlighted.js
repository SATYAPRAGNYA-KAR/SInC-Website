import React from "react";
import "./SettingsNewHistoryHighlighted.css";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

function HistoryHighlighted() {
  return (
    <div className="historyhighlighted">
      <HistoryOutlinedIcon />
      <div className="historyhighlighted__content">
        <h2>Search History</h2>
        <h3>Remember your Previous Actions</h3>
      </div>
      <hr />
    </div>
  );
}

export default HistoryHighlighted;
