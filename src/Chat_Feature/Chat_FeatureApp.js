import React from "react";
import "./Chat_FeatureApp.css";
// import Title from "./Chat_FeatureTitle";
import Sidebar from "./Chat_FeatureSidebar";
import Chat from "./Chat_FeatureChat";
// import Bottom from "./Chat_FeatureBottom";
import Header from "./Chat_FeatureHeader";
import Footer from "./Chat_FeatureFooter";

function ChatApp() {
  return (
    <div className="chatapp">
      <div className="chatapp__body">
        <Header />
        <div className="chatapp__sidebar-chat">
          <Sidebar />
          <Chat />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ChatApp;
