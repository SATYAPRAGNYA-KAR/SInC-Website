import React from "react";
import "./SettingsNewHistoryHome.css";
import HistorySidebar from "./SettingsNewHistorySidebar";
import HistoryMainbox from "./SettingsNewHistoryMainbox";
import Footer from "./SettingsNewFooter";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import GridOnIcon from "@mui/icons-material/GridOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function HistoryHome() {
  return (
    <div className="settingsnewhistoryhome">
      <div className="settingsnewheading">
        <Link to="/settingsnew" style={{ textDecoration: "none" }}>
          <div className="settingsnewheading__left">
            <SettingsIcon />
            <h2>Settings</h2>
          </div>
        </Link>
        <div className="settingsnewheading__right">
          <AccountCircleIcon />
        </div>
      </div>
      <div className="settingsnewbody">
        <div className="settingsnewbody__left">
          <div className="settingsnewdashboard">
            <div className="settingsnewdashboard__left">
              <SpeedIcon />
              <h4>Dashboard</h4>
            </div>
            <div className="settingsnewdashboard__right">
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="settingsnewstartups">
            <div className="settingsnewstartups__left">
              <GridOnIcon />
              <h4>List of Startups</h4>
            </div>
            <div className="settingsnewstartups__right">
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="settingsnewaboutus">
            <div className="settingsnewaboutus__left">
              <MenuBookIcon />
              <h4>About Us</h4>
            </div>
            <div className="settingsnewaboutus__right">
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="settingsnewcontact">
            <div className="settingsnewcontact__left">
              <CheckCircleOutlineIcon />
              <h4>Contact Us</h4>
            </div>
            <div className="settingsnewcontact__right">
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="settingsnewsettings">
            <div className="settingsnewsettings__left">
              <SettingsIcon />
              <h4>Settings</h4>
            </div>
            <div className="settingsnewsettings__right">
              <ExpandMoreIcon />
              <hr />
            </div>
          </div>
          <div className="settingsnewhelp">
            <div className="settingsnewhelp__left">
              <WarningAmberIcon />
              <h4>Help</h4>
            </div>
            <div className="settingsnewhelp__right">
              <ExpandMoreIcon />
            </div>
          </div>
        </div>
        <HistorySidebar />
        <HistoryMainbox />
      </div>

      <Footer />
    </div>
  );
}

export default HistoryHome;
