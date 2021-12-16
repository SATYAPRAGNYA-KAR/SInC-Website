import React from "react";
import "./SettingsApp.css";
import Header from "./SettingsHeader";
import Body from "./SettingsBody";
import Footer from "./SettingsFooter";

function SettingsApp() {
  return (
    <div className="settingsapp">
      <div className="settingsapp__header">
        <Header />
      </div>
      <div className="settingsapp__body">
        <Body />
      </div>
      <div className="settingsapp__footer">
        <Footer />
      </div>
    </div>
  );
}

export default SettingsApp;
//npm install @material-ui/icons or npm install @mui/icons-material used to solve error showing up in the terminal
