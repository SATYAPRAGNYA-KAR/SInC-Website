import React from "react";
import "./SettingsNewInfoHome.css";
import InfoSidebar from "./SettingsNewInfoSidebar";
import InfoMainbox from "./SettingsNewInfoMainbox";

function InfoHome() {
  return (
    <div className="infohome">
      <InfoSidebar />
      <InfoMainbox />
    </div>
  );
}

export default InfoHome;
