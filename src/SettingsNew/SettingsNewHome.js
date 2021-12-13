import React from "react";
import "./SettingsNewHome.css";
import Sidebar from "./SettingsNewSidebar";
import Mainbox from "./SettingsNewMainbox";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Mainbox />
    </div>
  );
}

export default Home;
