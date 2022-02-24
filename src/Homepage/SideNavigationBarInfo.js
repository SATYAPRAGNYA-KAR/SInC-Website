import React from "react";
import "./SideNavigationBarInfo.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";
function Info() {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sidenavigationbarinfo">
          <InfoOutlinedIcon />
          <h3>About SInC</h3>
        </div>
      </Link>
    </div>
  );
}

export default Info;
