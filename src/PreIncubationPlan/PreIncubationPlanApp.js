import "./PreIncubationPlanApp.css";
import businessDeal from "./businessDeal.png";
import rocket from "./rocket.png";
import invertedCommas from "./invertedCommas.png";
import Header from "./Navbar";
import Footer from "../Login/LoginFooter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

function PreIncubationPlanApp() {
  return (
    <div className="PreIncubationPlanApp">
      <div className="PreIncubationPlan_header">
        <Header />
      </div>

      <div className="PreIncubationPlanmain-heading">Pre Incubation Plan</div>
      <div className="PreIncubationPlanboxes">
        <div className="PreIncubationPlanbox1">
          <div className="PreIncubationPlanbox-text">
            <div className="PreIncubationPlanbox-text-heading">Introduction</div>
            <div className="PreIncubationPlanbox-text-content">
              An initiative to connect the IITD Startup Community (Mentors,
              Investors and startups) and bridge the gap between the ones
              seeking help and the ones willing to help.
            </div>
          </div>
          <div className="PreIncubationPlanbox1-image">
            <img src={businessDeal} alt="Two people shaking hands" />
          </div>
        </div>
        <div className="PreIncubationPlanbox2">
          <div className="PreIncubationPlanbox-text">
            <div className="PreIncubationPlanbox-text-heading">
              Relation with Entrepreneurship Kickstart
            </div>
            <div className="PreIncubationPlanbox-text-content">
              Alumni in the IITD Angel Network interested in helping startups at
              nascent stages can help us to implement the initiative by being a
              mentor, or donating to nurturing funds. Mentioned below is a
              detailed description.
            </div>
          </div>
          <div className="PreIncubationPlanbox2-image">
            <img src={rocket} alt="Two people shaking hands" />
          </div>
        </div>
      </div>
      <div className="PreIncubationPlaninviting-our-alumni">
        Inviting our alumni to be a part of of the initiative that is going to
        change the way entrepreneurship is looked at in the campus.
      </div>

      <div className="PreIncubationPlanline-under-quotes">
        <img
          className="PreIncubationPlanopening-quotes"
          src={invertedCommas}
          alt="beginning inverted commas"
        />
        <div className="PreIncubationPlanthe-line">
          IT’S NOT ABOUT IDEAS,
          <br />
          IT’S ABOUT MAKING
          <br />
          IDEAS HAPPEN.
        </div>
        <img
          className="PreIncubationPlanclosing-quotes"
          src={invertedCommas}
          alt="ending inverted commas"
        />
      </div>
      <Link to="/angelnetworkmentor" style={{ color: "black" }}>
        <ExpandMoreIcon />
      </Link>
      <div className="PreIncubationPlan_footer">
        <Footer />
      </div>
    </div>
  );
}

export default PreIncubationPlanApp;
