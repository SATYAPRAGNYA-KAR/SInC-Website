import "./IITDAngelNetworkApp.css";
import businessDeal from "./businessDeal.png";
import rocket from "./rocket.png";
import invertedCommas from "./invertedCommas.png";
import Header from "./IITDAngelNetworkHeader";
import Footer from "./IITDAngelNetworkFooter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

function IITDAngelNetworkApp() {
  return (
    <div className="iitdangelnetworkApp">
      <div className="iitdangelnetwork_header">
        <Header/>
      </div>
      
      <div className="iitdangelnetworkmain-heading">IITD Angel Network</div>
      <div className="iitdangelnetworkboxes">
        <div className="iitdangelnetworkbox1">
          <div className="iitdangelnetworkbox-text">
            <div className="iitdangelnetworkbox-text-heading">Introduction</div>
            <div className="iitdangelnetworkbox-text-content">
              An initiative to connect the IITD Startup Community (Mentors,
              Investors and startups) and bridge the gap between the ones
              seeking help and the ones willing to help.
            </div>
          </div>
          <div className="iitdangelnetworkbox1-image">
            <img src={businessDeal} alt="Two people shaking hands" />
          </div>
        </div>
        <div className="iitdangelnetworkbox2">
          <div className="iitdangelnetworkbox-text">
            <div className="iitdangelnetworkbox-text-heading">
              Relation with Entrepreneurship Kickstart
            </div>
            <div className="iitdangelnetworkbox-text-content">
              Alumni in the IITD Angel Network interested in helping startups at
              nascent stages can help us to implement the initiative by being a
              mentor, or donating to nurturing funds. Mentioned below is a
              detailed description.
            </div>
          </div>
          <div className="iitdangelnetworkbox2-image">
            <img src={rocket} alt="Two people shaking hands" />
          </div>
        </div>
      </div>
      <div className="iitdangelnetworkinviting-our-alumni">
        Inviting our alumni to be a part of of the initiative that is going to
        change the way entrepreneurship is looked at in the campus.
      </div>

      <div className="iitdangelnetworkline-under-quotes">
        <img
          className="iitdangelnetworkopening-quotes"
          src={invertedCommas}
          alt="beginning inverted commas"
        />
        <div className="iitdangelnetworkthe-line">
          IT’S NOT ABOUT IDEAS,
          <br />
          IT’S ABOUT MAKING
          <br />
          IDEAS HAPPEN.
        </div>
        <img
          className="iitdangelnetworkclosing-quotes"
          src={invertedCommas}
          alt="ending inverted commas"
        />
      </div>
      <Link to="/angelnetworkmentor" style={{ color: "black" }}>
        <ExpandMoreIcon />
      </Link>
      <div className="iitdangelnetwork_footer">
        <Footer/>
      </div>
    </div>
  );
}

export default IITDAngelNetworkApp;
