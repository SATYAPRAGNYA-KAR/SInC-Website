import React from "react";
import "./NotificationsApp.css";
import Header from "./NotificationsHeader";
import Sidebar from "./NotificationsSidebar";
import Message from "./NotificationsMessage";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Footer from "./NotificationsFooter";

function NotificationsApp() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="aligned">
          <NotificationsNoneIcon />
          <h2>Notifications</h2>
        </div>
        <div className="content">
          <Sidebar />
          <Message />
        </div>
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default NotificationsApp;
//Module not found: Can't resolve '@emotion/react' in 'D:\VS CODE\SInC\Notifications\notifications\node_modules\@mui\styled-engine'- To resolve this npm install @emotion/react and npm install @emotion/styled installed first
