import React from "react";
import "./SideNavigationBarMessages.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

function Messages() {
  return (
    <div>
      <div className="sidenavigationbarmessages">
        <ChatBubbleOutlineOutlinedIcon />
        <h3>Messages</h3>
      </div>
    </div>
  );
}

export default Messages;
