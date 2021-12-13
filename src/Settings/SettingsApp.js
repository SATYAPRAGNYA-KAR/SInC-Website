import React from "react";
import "./SettingsApp.css";
import Header from "./SettingsHeader";
import Body from "./SettingsBody";
import Footer from "./SettingsFooter";

function SettingsApp() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <Body />
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default SettingsApp;
//npm install @material-ui/icons or npm install @mui/icons-material used to solve error showing up in the terminal
