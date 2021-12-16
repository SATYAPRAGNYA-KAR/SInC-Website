import React from "react";
import "./SideNavigationBarApp.css";
import Profile from "./SideNavigationBarProfile";
import Follower from "./SideNavigationBarFollower";
import Messages from "./SideNavigationBarMessages";
import Notifications from "./SideNavigationBarNotifications";
import Settings from "./SideNavigationBarSettings";
import Info from "./SideNavigationBarInfo";
import Contact from "./SideNavigationBarContact";
import Logout from "./SideNavigationBarLogout";

function SideNavigationBarApp() {
  return (
    <div className="sidenavigationbarapp">
      <div className="sidenavigationbarside">
        <Profile />
        <Follower />
        <Messages />
        <Notifications />
        <Settings />
        <Info />
        <Contact />
        <Logout />
      </div>
    </div>
  );
}

export default SideNavigationBarApp;
//  display: flex;
//  align-items: center;
//  justify-content: center;
//used to center an item completely inside its div
