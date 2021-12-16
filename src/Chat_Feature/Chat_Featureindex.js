import React from "react";
import ReactDOM from "react-dom";
import "./Chat_Featureindex.css";
import ChatApp from "./Chat_FeatureApp";
import reportWebVitals from "./Chat_FeaturereportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
