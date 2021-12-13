import React from "react";
import "./SettingsNewDeleteMainbox.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";

function DeleteMainbox() {
  return (
    <div className="deletemainbox">
      <div className="deletemainbox__left">
        <div className="profile">
          <h2>Edit Profile</h2>
          <ChevronRightIcon />
        </div>
        <div className="change">
          <h2>Change Password</h2>
          <ChevronRightIcon />
        </div>
        <div className="payment">
          <h2>Add a payment method</h2>
          <AddIcon />
        </div>
        <div className="notifications">
          <h2>Push Notifications</h2>
          <label className="switch1">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="dark">
          <h2>Dark Mode</h2>
          <label className="switch2">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="deletemainbox__right">
        <div className="deletemainbox__rightbox"></div>
        <div className="deletemainbox__buttons">
          <button className="left__button">Discard Changes</button>
          <button className="right__button">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteMainbox;
