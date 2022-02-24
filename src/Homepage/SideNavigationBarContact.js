import React from "react";
import "./SideNavigationBarContact.css";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Link to="/contactus" style={{ textDecoration: "none" }}>
        <div className="sidenavigationbarcontact">
          <CallOutlinedIcon />
          <h3>Contact Us</h3>
        </div>
      </Link>
    </div>
  );
}

export default Contact;
