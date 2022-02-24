import "./PreIncubationPlanApp.css";
import businessDeal from "./businessDeal.png";
import rocket from "./rocket.png";
import invertedCommas from "./invertedCommas.png";
import Header from "./PreIncubationPlanHeader";
import Footer from "./PreIncubationPlanFooter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

function preincubplanApp() {
  return (
    <div className="preincubplanApp">
      <div className="preincubplan_header">
        <Header/>
      </div>
      
      <div className="preincubplanmain-heading">Pre Incubation Plan</div>
      <div className="preincubplanboxes">
        <div className="preincubplanbox1">
          <div className="preincubplanbox-text">
            <div className="preincubplanbox-text-heading">Introduction</div>
            <div className="preincubplanbox-text-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus in hac habitasse platea. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Morbi leo urna molestie at elementum eu facilisis. 
            </div>
          </div>
          <div className="preincubplanbox1-image">
            <img src={businessDeal} alt="Two people shaking hands" />
          </div>
        </div>
        <div className="preincubplanbox2">
          <div className="preincubplanbox-text">
            <div className="preincubplanbox-text-heading">
            Lorem Ipsum dolor sit amet, consectetur
            </div>
            <div className="preincubplanbox-text-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus in hac habitasse platea. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Morbi leo urna 
            </div>
          </div>
          <div className="preincubplanbox2-image">
            <img src={rocket} alt="Two people shaking hands" />
          </div>
        </div>
      </div>
      <div className="preincubplaninviting-our-alumni">
        Inviting our alumni to be a part of of the initiative that is going to
        change the way entrepreneurship is looked at in the campus.
      </div>

      <div className="preincubplanline-under-quotes">
        <img
          className="preincubplanopening-quotes"
          src={invertedCommas}
          alt="beginning inverted commas"
        />
        <div className="preincubplanthe-line">
          IT’S NOT ABOUT IDEAS,
          <br />
          IT’S ABOUT MAKING
          <br />
          IDEAS HAPPEN.
        </div>
        <img
          className="preincubplanclosing-quotes"
          src={invertedCommas}
          alt="ending inverted commas"
        />
      </div>
      <Link to="/angelnetworkmentor" style={{ color: "black" }}>
        <ExpandMoreIcon />
      </Link>
      <div className="preincubplan_footer">
        <Footer/>
      </div>
    </div>
  );
}

export default preincubplanApp;
