import React from "react";
import "./SideNavigationBarFollower.css";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

function Follower() {
  return (
    <div>
      <div className="sidenavigationbarfollower">
        <PeopleAltOutlinedIcon />
        <h3>People you Follow</h3>
      </div>
    </div>
  );
}

export default Follower;
