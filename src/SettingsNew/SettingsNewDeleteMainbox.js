import React from "react";
import "./SettingsNewDeleteMainbox.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";

function DeleteMainbox() {
  return (
    <div className="settingsnewdeletemainbox">
      <div className="settingsnewdeletemainbox__left">
        <div className="settingsnewprofile">
          <h2>Edit Profile</h2>
          <ChevronRightIcon />
        </div>
        <div className="settingsnewchange">
          <h2>Change Password</h2>
          <ChevronRightIcon />
        </div>
        <div className="settingsnewpayment">
          <h2>Add a payment method</h2>
          <AddIcon />
        </div>
        <div className="settingsnewnotifications">
          <h2>Push Notifications</h2>
          <label className="settingsnewswitch1">
            <input type="settingsnewcheckbox" />
            <span className="settingsnewslider round"></span>
          </label>
        </div>
        <div className="settingsnewdark">
          <h2>Dark Mode</h2>
          <label className="settingsnewswitch2">
            <input type="settingsnewcheckbox" />
            <span className="settingsnewslider round"></span>
          </label>
        </div>
      </div>
      <div className="settingsnewdeletemainbox__right">
        <div className="settingsnewdeletemainbox__rightbox"></div>
        <div className="settingsnewdeletemainbox__buttons">
          <button className="settingsnewleft__button">Discard Changes</button>
          <button className="settingsnewright__button">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteMainbox;
