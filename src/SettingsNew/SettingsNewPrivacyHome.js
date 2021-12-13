import React from "react";
import "./SettingsNewPrivacyHome.css";
import PrivacySidebar from "./SettingsNewPrivacySidebar";
import PrivacyMainbox from "./SettingsNewPrivacyMainbox";

function PrivacyHome() {
  return (
    <div className="privacyhome">
      <PrivacySidebar />
      <PrivacyMainbox />
    </div>
  );
}

export default PrivacyHome;
