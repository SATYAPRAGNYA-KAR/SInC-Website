import React from "react";
import "./NotificationsError.css";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Error() {
  return (
    <div className="error">
      <WarningAmberIcon />
      <div className="error__total">
        <div className="error__info">
          <h2>Error</h2>
          <p>E-mail id not confirmed</p>
        </div>
        <div className="error__detail">
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
