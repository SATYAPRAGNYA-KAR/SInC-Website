import React from "react";
import "./SettingsNewHistoryHome.css";
import HistorySidebar from "./SettingsNewHistorySidebar";
import HistoryMainbox from "./SettingsNewHistoryMainbox";

function HistoryHome() {
  return (
    <div className="settingsnewhistoryhome">
      <HistorySidebar />
      <HistoryMainbox />
    </div>
  );
}

export default HistoryHome;
