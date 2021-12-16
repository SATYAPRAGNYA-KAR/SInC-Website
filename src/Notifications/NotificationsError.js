import React from "react";
import "./NotificationsError.css";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Error() {
  return (
    <div className="notificationserror">
      <WarningAmberIcon />
      <div className="notificationserror__total">
        <div className="notificationserror__info">
          <h2>Error</h2>
          <p>E-mail id not confirmed</p>
        </div>
        <div className="notificationserror__detail">
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

export default Error;
