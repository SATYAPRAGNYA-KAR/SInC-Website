import React from "react";
import "./SideNavigationBarFollower.css";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { Link } from "react-router-dom";
function Follower() {
  return (
    <div>
      <Link to="/mentors_startupsyoufollow" style={{ textDecoration: "none" }}>
        <div className="sidenavigationbarfollower">
          <PeopleAltOutlinedIcon />
          <h3>People you Follow</h3>
        </div>
      </Link>
    </div>
  );
}

export default Follower;
