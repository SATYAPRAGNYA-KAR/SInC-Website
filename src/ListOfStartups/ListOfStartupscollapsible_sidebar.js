import React from "react";
import "./ListOfStartupscollapsible_sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";

function collapsible_sidebar() {
  return (
    <div className="listofstartupscollapsible_sidebar">
      <div className="listofstartupscollapsible_sidebar_header">
        <BiMenuAltLeft size={30} className="icon" />
        Dashboard
      </div>
      <div className="listofstartupscollapsible_sidebar_body">
        <div className="listofstartupscollapsible_sidebar_icons">
          <AiFillHome className="listofstartupscollapsible_sidebaricon" />
          Home
        </div>
        <div className="listofstartupscollapsible_sidebar_icons">
          <MdExplore className="listofstartupscollapsible_sidebaricon" />
          Explore
        </div>
        <div className="listofstartupscollapsible_sidebar_icons">
          <BiLibrary className="listofstartupscollapsible_sidebaricon" />
          Library
        </div>
        <div className="listofstartupscollapsible_sidebar_icons">
          <AiOutlineHistory className="listofstartupscollapsible_sidebaricon" />
          History
        </div>
        <div className="listofstartupscollapsible_sidebar_icons"></div>
        <div className="listofstartupscollapsible_sidebar_icon"></div>
      </div>
    </div>
  );
}

export default collapsible_sidebar;
