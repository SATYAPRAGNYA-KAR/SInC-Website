import React from "react";
import "./Chat_FeatureApp.css";
import Title from "./Chat_FeatureTitle";
import Sidebar from "./Chat_FeatureSidebar";
import Chat from "./Chat_FeatureChat";
import Bottom from "./Chat_FeatureBottom";

function ChatApp() {
  return (
    <div className="chatapp">
      <div className="chatapp__body">
        <Title />

        <div className="chatapp__sidebar-chat">
          <Sidebar />

          <Chat />
        </div>
        <Bottom />
      </div>
    </div>
  );
}

export default ChatApp;
