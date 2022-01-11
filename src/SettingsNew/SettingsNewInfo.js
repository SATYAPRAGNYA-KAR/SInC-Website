import React from "react";
import "./SettingsNewInfo.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

function Info() {
  return (
    <Link to="/settingsnew/infopath" style={{ textDecoration: "none" }}>
      <div className="settingsnewinfo">
        <InfoOutlinedIcon />
        <div className="settingsnewinfo__content">
          <h2>About Us</h2>
          <h3>Find out more about SInC</h3>
        </div>
      </div>
    </Link>
  );
}

export default Info;
