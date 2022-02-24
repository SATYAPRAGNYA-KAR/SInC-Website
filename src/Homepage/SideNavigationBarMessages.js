import React from "react";
import "./SideNavigationBarMessages.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Link } from "react-router-dom";

function Messages() {
  return (
    <div>
      <Link to="/chat" style={{ textDecoration: "none" }}>
      <div className="sidenavigationbarmessages">
        <ChatBubbleOutlineOutlinedIcon />
        <h3>Messages</h3>
      </div>
      </Link>
    </div>
  );
}

export default Messages;
