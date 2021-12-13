import React from "react";
import "./FAQsApp.css";
import Header from "./FAQsHeader";
import Footer from "./FAQsFooter";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQsApp() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="container">
        <div className="app__body">
          <div className="app__bodyLeft">
            <div className="app__bodyLeftTop">
              <p>
                <b>F</b>requently
              </p>
              <p>
                <b>A</b>sked
              </p>
              <p>
                <b>Q</b>uestions
              </p>
            </div>
            <hr />
            <div className="app__bodyLeftBottom">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus in finibus urna, a maximus enim.{" "}
              </p>
            </div>
          </div>
          <div className="app__bodyRight">
            <h2>FAQs</h2>
            <div className="text__container">
              <div className="heading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="icon__container1">
                  <ExpandLessIcon />
                </div>
              </div>
              <div className="body">
                <p>
                  We provide a platform for startups to glow. We aim to provide
                  all necessary requirements for you to start a start up.
                </p>
              </div>
            </div>
            <div className="text__container">
              <div className="heading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="icon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="text__container">
              <div className="heading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="icon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="text__container">
              <div className="heading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="icon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="text__container">
              <div className="heading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="icon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="text__container">
              <div className="heading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="icon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="text__container">
              <div className="heading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="icon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="text__container">
              <div className="heading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="icon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="text__container">
              <div className="heading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="icon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="text__container">
              <div className="heading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="icon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="text__container">
              <div className="heading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="icon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default FAQsApp;
