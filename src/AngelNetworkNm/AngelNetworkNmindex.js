import React from "react";
import ReactDOM from "react-dom";
import "./AngelNetworkNmindex.css";
import AngelNetworkNmApp from "./AngelNetworkNmApp";
import reportWebVitals from "./AngelNetworkNmreportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <AngelNetworkNmApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
