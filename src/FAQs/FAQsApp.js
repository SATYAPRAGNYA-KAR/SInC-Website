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
                <h3>Q: What is the Startup Incubation Cell?
</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
              <div className="faqsbody">
                <p>
                  A: The Student Incubation Cell is essentially a pre-incubation program for students of IIT Delhi. As a part of this, all students with executable ideas will be provided funds, incubation spaces & mentorship to develop their ideas into startups over a course of 5-6 months.
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
            <div className="faqsbody">
                <p>
                 A: We provide a platform for startups to glow. We aim to provide all the necessary requirements for you to start a start-up. It is a platform, to promote design thinking, planful ideations & support budding entrepreneurs at IIT Delhi to become established, successful and independent entrepreneurs.
                </p>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q: What is a Startup?
</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
                <div className="faqsbody">
                <p>
                A: Any new business that applies an innovative solution. The solution can be either technological or a unique business model.
                </p>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q: How do you start a startup?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
                <div className="faqsbody">
                <p>
                A: An idea, investment, and time are all that are required to launch a startup. As a startup, you'll need to work on several fronts at once in order to get investment or be able to bootstrap your startup.
                </p>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q: Why do Startups succeed?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
                <div className="faqsbody">
                <p>
                 A: Preparation, an effective business plan, and the ability to place yourself in a market that promises long-term exponential development are some of the characteristics of successful startup companies.
                </p>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q: What are the costs of a Startup?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
                <div className="faqsbody">
                <p>
                A: It all relies on your business concept and desired scale. 
The initial funding will go towards product development, team members, and technology. As you grow, you'll need to budget for location, research, and marketing. Before you begin looking for investors, you'll need to conduct research, create a business plan, and construct a prototype of your product.
                </p>
              </div>
            </div>
            <div className="faqstext__container">
              <div className="faqsheading">
                <h3>Q: What do startups need to know?</h3>
                <div className="faqsicon__container1">
                  <ExpandMoreIcon />
                </div>
              </div>
                <div className="faqsbody">
                <p>
                  A: When it comes to what you need to know, basic business principles apply. From a business-centric viewpoint, you will need to know your target audience, conduct market research, find investors, register and pick a location (you can also choose to be location independent), and develop a product that stands out from the market.
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
                <div className="faqsbody">
                <p>
                 A: We provide a platform for startups to glow. We aim to provide all the necessary requirements for you to start a start-up. It is a platform, to promote design thinking, planful ideations & support budding entrepreneurs at IIT Delhi to become established, successful and independent entrepreneurs.
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
                <div className="faqsbody">
                <p>
                 A: We provide a platform for startups to glow. We aim to provide all the necessary requirements for you to start a start-up. It is a platform, to promote design thinking, planful ideations & support budding entrepreneurs at IIT Delhi to become established, successful and independent entrepreneurs.
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
                <div className="faqsbody">
                <p>
                 A: We provide a platform for startups to glow. We aim to provide all the necessary requirements for you to start a start-up. It is a platform, to promote design thinking, planful ideations & support budding entrepreneurs at IIT Delhi to become established, successful and independent entrepreneurs.
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
                  <div className="faqsbody">
                <p>
                 A: We provide a platform for startups to glow. We aim to provide all the necessary requirements for you to start a start-up. It is a platform, to promote design thinking, planful ideations & support budding entrepreneurs at IIT Delhi to become established, successful and independent entrepreneurs.
                </p>
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
