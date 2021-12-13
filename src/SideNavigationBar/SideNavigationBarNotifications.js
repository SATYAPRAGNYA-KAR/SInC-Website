import React from "react";
import "./SideNavigationBarNotifications.css";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

function Notifications() {
  return (
    <div>
      <div className="notifications">
        <NotificationsOutlinedIcon />
        <h3>Notifications</h3>
      </div>
    </div>
  );
}

export default Notifications;
