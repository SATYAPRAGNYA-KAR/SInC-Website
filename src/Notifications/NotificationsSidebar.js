import React from "react";
import "./NotificationsSidebar.css";
import Follower from "./NotificationsFollower";
import Chat from "./NotificationsChat";
import Error from "./NotificationsError";
import Webinar from "./NotificationsWebinar";

function Sidebar() {
  return (
    <div className="sidebar">
      <Follower />
      <Error />
      <Webinar />
      <Chat />
      <Webinar />
      <Webinar />
      <Webinar />
      <Chat />
      <Error />
      <Chat />
      <Chat />
      <Webinar />
      <Error />
    </div>
  );
}

export default Sidebar;
