import React from "react";
import "./SettingsNewApp.css";
import Home from "./SettingsNewHome";
import Footer from "./SettingsNewFooter";
import { Routes, Route } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PrivacyHome from "./SettingsNewPrivacyHome";
import PasswordHome from "./SettingsNewPasswordHome";
import DeleteHome from "./SettingsNewDeleteHome";
import FriendHome from "./SettingsNewFriendHome";
import HistoryHome from "./SettingsNewHistoryHome";
import InfoHome from "./SettingsNewInfoHome";
import { Link } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import GridOnIcon from "@mui/icons-material/GridOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SettingsNewApp() {
  return (
    <div className="settingsnewapp">
      <div className="settingsnewheading">
        <Link exact to="/settingsnew" style={{ textDecoration: "none" }}>
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
        <div className="settingsnewbody__right">
          <Routes>
            <Route path="/privacypath" element={<PrivacyHome />} />
            <Route path="/passwordpath" element={<PasswordHome />} />
            <Route path="/deletepath" element={<DeleteHome />} />
            <Route path="/friendpath" element={<FriendHome />} />
            <Route path="/historypath" element={<HistoryHome />} />
            <Route path="/infopath" element={<InfoHome />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingsNewApp;
// How to get rid of underline for Link component of React Router?
// <Link to="first" style={{ textDecoration: 'none' }}>
//   Link
// </Link>
