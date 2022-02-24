import React from "react";
import "./SideNavigationBarNotifications.css";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Link } from "react-router-dom";

function Notifications() {
  return (
    <div>
      <Link to="/notifications" style={{ textDecoration: "none" }}>
        <div className="sidenavigationbarnotifications">
          <NotificationsOutlinedIcon />
          <h3>Notifications</h3>
        </div>
      </Link>
    </div>
  );
}

export default Notifications;
