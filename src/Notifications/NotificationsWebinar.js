import React from "react";
import "./NotificationsWebinar.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Webinar() {
  return (
    <div className="webinar">
      <CheckCircleOutlineIcon />
      <div className="webinar__total">
        <div className="webinar__info">
          <h2>Webinar</h2>
          <p>Webinar on Innovation by Mr. Chaudhary on 20.05.20</p>
        </div>
        <div className="webinar__detail">
          <DeleteOutlineIcon />
          <p>
            14 May
            <br />
            19:35
          </p>
        </div>
      </div>
    </div>
  );
}

export default Webinar;
