import React from "react";
import ReactDOM from "react-dom";
import "./PreIncubationPlanindex.css";
import PreIncubationPlanApp from "./PreIncubationPlanApp";
import reportWebVitals from "./PreIncubationPlanreportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <PreIncubationPlanApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
