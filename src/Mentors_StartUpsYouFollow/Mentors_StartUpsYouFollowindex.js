import React from "react";
import ReactDOM from "react-dom";
import "./Mentors_StartUpsYouFollowindex.css";
import MentorsStartUpsYouFollowApp from "./Mentors_StartUpsYouFollowApp";
import reportWebVitals from "./Mentors_StartUpsYouFollowreportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <MentorsStartUpsYouFollowApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
