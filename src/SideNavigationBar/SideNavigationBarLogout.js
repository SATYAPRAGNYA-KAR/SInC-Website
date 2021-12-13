import React from "react";
import "./SideNavigationBarLogout.css";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function Logout() {
  return (
    <div>
      <div className="logout">
        <h3>Logout</h3>
        <LogoutOutlinedIcon />
      </div>
    </div>
  );
}

export default Logout;
