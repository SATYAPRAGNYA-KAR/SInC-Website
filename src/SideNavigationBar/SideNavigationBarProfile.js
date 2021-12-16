import React from "react";
import "./SideNavigationBarProfile.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function Profile() {
  return (
    <div className="sidenavigationbarprofile">
      <PersonOutlineOutlinedIcon />
      <h3>View Profile</h3>
    </div>
  );
}

export default Profile;
