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
    <div className="app">
      <div className="heading">
        <Link to="/settingsnew/" style={{ textDecoration: "none" }}>
          <div className="heading__left">
            <SettingsIcon />
            <h2>Settings</h2>
          </div>
        </Link>
        <div className="heading__right">
          <AccountCircleIcon />
        </div>
      </div>
      <div className="body">
        <div className="body__left">
          <div className="dashboard">
            <div className="dashboard__left">
              <SpeedIcon />
              <h4>Dashboard</h4>
            </div>
            <div className="dashboard__right">
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="startups">
            <div className="startups__left">
              <GridOnIcon />
              <h4>List of Startups</h4>
            </div>
            <div className="startups__right">
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="aboutus">
            <div className="aboutus__left">
              <MenuBookIcon />
              <h4>About Us</h4>
            </div>
            <div className="aboutus__right">
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="contact">
            <div className="contact__left">
              <CheckCircleOutlineIcon />
              <h4>Contact Us</h4>
            </div>
            <div className="contact__right">
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="settings">
            <div className="settings__left">
              <SettingsIcon />
              <h4>Settings</h4>
            </div>
            <div className="settings__right">
              <ExpandMoreIcon />
              <hr />
            </div>
          </div>
          <div className="help">
            <div className="help__left">
              <WarningAmberIcon />
              <h4>Help</h4>
            </div>
            <div className="help__right">
              <ExpandMoreIcon />
            </div>
          </div>
        </div>
        <div className="body__right">
          <Routes>
            <Route path="/settingsnew/privacypath" element={<PrivacyHome />} />
            <Route
              path="/settingsnew/passwordpath"
              element={<PasswordHome />}
            />
            <Route path="/settingsnew/deletepath" element={<DeleteHome />} />
            <Route path="/settingsnew/friendpath" element={<FriendHome />} />
            <Route path="/settingsnew/historypath" element={<HistoryHome />} />
            <Route path="/settingsnew/infopath" element={<InfoHome />} />
            <Route path="/settingsnew/" element={<Home />} />
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
