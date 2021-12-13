import React from "react";
import "./SettingsNewPasswordHome.css";
import PasswordSidebar from "./SettingsNewPasswordSidebar";
import PasswordMainbox from "./SettingsNewPasswordMainbox";

function PasswordHome() {
  return (
    <div className="passwordhome">
      <PasswordSidebar />
      <PasswordMainbox />
    </div>
  );
}

export default PasswordHome;
