import React from "react";
import ReactDOM from "react-dom";
import "./StartupsRegistrationFormindex.css";
import StartupsRegistrationFormApp from "./StartupsRegistrationFormApp";
import reportWebVitals from "./StartupsRegistrationFormreportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <StartupsRegistrationFormApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
