import React from "react";
import ReactDOM from "react-dom";
import "./FAQsindex.css";
import FAQsApp from "./FAQsApp";
import reportWebVitals from "./FAQsreportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <FAQsApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
