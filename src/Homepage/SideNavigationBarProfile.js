import React from "react";
import "./SideNavigationBarProfile.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <Link to="/aboutstartup" style={{ textDecoration: "none" }}>
        <div className="sidenavigationbarprofile">
            <PersonOutlineOutlinedIcon />
            <h3>View Profile</h3>
        </div>
      </Link>
    </div>
  );
}

export default Profile;
