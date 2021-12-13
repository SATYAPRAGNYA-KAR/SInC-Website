import React from "react";
import { SearchOutlined } from "@mui/icons-material";
import "./Chat_FeatureSidebar.css"; /* Everytime you create components, just simultaneously import the corresponding css file */
import SidebarChat from "./Chat_FeatureSidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
