import React from "react";
import "./FAQsApp.css";
// import Header from "./FAQsHeader";
import Topbar from "./Navbar";
import Footer from "./FAQsFooter";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQsApp() {
  return (
    <div className="faqsapp">
      {/* <div className="faqsapp__header"> */}
        <Topbar  />
      {/* </div> */}
      <div className="faqscontainer">
        {/* <div className="faqsapp__body"> */}
          {/* <div className="faqsapp__bodyLeft">
            <div className="faqsapp__bodyLeftTop">
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
            <div className="faqsapp__bodyLeftBottom">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus in finibus urna, a maximus enim.{" "}
              </p>
            </div>
          </div>
          <div className="faqsapp__bodyRight">
            <h2>FAQs</h2>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q: What is the Startup Incubation Cell?
</h3>
                <div className="faqsicon__container1">
                  <ExpandLessIcon />
                </div>
              </div>
              <div className="faqsbody">
                <p>
                  A: The Student Incubation Cell is essentially a pre-incubation program for students of IIT Delhi. As a part of this, all students with executable 
                  ideas will be provided funds, incubation spaces & mentorship to develop their ideas into startups over a course of 5-6 months.
                </p>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div> */}
          {/* </div> */}
          <div className="row" style={{marginRight:'0px', marginLeft:'0px'}}>
            <div className="col-md-2 " >
            <div id="faq" style={{textAlign:'center'}}  className="faqsapp__bodyLeftTop">
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
            <div style={{textAlign:'center'}} className="faqsapp__bodyLeftBottom">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus in finibus urna, a maximus enim.{" "}
              </p>
            </div>
            </div>
            <div className="col-md-10 ">
            <h2  id="faqq" style={{textAlign:'center'}}>FAQs</h2>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandLessIcon />
                </div>
              </div>
              <div className="faqsbody">
                <p>
                  We provide a platform for startups to glow. We aim to provide
                  all necessary requirements for you to start a start up.
                </p>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q. What is the purpose of SInC IITD?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
            
            </div>
            </div>
        </div>
        <div className="faqsapp__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default FAQsApp;
