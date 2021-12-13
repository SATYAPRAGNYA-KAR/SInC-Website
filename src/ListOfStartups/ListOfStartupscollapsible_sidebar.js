import React from "react";
import "./ListOfStartupscollapsible_sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";

function collapsible_sidebar() {
  return (
    <div className="collapsible_sidebar">
      <div className="collapsible_sidebar_header">
        <BiMenuAltLeft size={30} className="icon" />
        Dashboard
      </div>
      <div className="collapsible_sidebar_body">
        <div className="collapsible_sidebar_icons">
          <AiFillHome className="icon" />
          Home
        </div>
        <div className="collapsible_sidebar_icons">
          <MdExplore className="icon" />
          Explore
        </div>
        <div className="collapsible_sidebar_icons">
          <BiLibrary className="icon" />
          Library
        </div>
        <div className="collapsible_sidebar_icons">
          <AiOutlineHistory className="icon" />
          History
        </div>
        <div className="collapsible_sidebar_icons"></div>
        <div className="collapsible_sidebar_icon"></div>
      </div>
    </div>
  );
}

export default collapsible_sidebar;
