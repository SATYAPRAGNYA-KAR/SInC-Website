import "./AngelNetworkInvestorApp.css";
import Header from "./AngelNetworkInvestorHeader";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import { Link } from "react-router-dom";

function AngelNetworkInvestorApp() {
  return (
    <div className="angelnetworkinvestorApp">
      <Header />
      <div className="angelnetworkinvestorbuttons">
        <div className="angelnetworkinvestorbutton1">
          <Link to="/angelnetworkmentor">
            <button>Mentors</button>
          </Link>
        </div>
        <div className="angelnetworkinvestorbutton2">
          <Link to="/angelnetworkinvestor">
            <button>What is in it for you</button>
          </Link>
        </div>
        <div className="angelnetworkinvestorbutton3">
          <Link to="/angelnetworknm">
            <button>Nurturing Funds</button>
          </Link>
        </div>
      </div>
      <div className="angelnetworkinvestorunderline">
        <div className="angelnetworkinvestorbold"></div>
        <div className="angelnetworkinvestorthin"></div>
      </div>

      <div className="angelnetworkinvestorcontainer">
        <div
          className="angelnetworkinvestorsection"
          id="angelnetworkinvestorsection1"
        >
          <div
            className="angelnetworkinvestortext"
            id="angelnetworkinvestortext1"
          >
            {/* <div className="heading" id="heading1">
              What role will these funds play?
            </div> */}
            <div
              className="angelnetworkinvestorbox"
              id="angelnetworkinvestorbox1"
            >
              Associating with us means getting an early access to the upcoming
              startups and ideas that are being born out of your alma mater. An
              institute of Eminence which boasts of producing the highest number
              of unicorns amongst any other institute in India and many other
              laurels, thanks to the legacy of you guys
            </div>
          </div>
          <div
            className="angelnetworkinvestorimage"
            id="angelnetworkinvestorimage1"
          >
            <img src={img1} alt="" />
          </div>
        </div>

        <div
          className="angelnetworkinvestorsection"
          id="angelnetworkinvestorsection2"
        >
          <div
            className="angelnetworkinvestortext"
            id="angelnetworkinvestortext2"
          >
            {/* <div className="heading" id="heading2">
              Do startups really need these funds?
            </div> */}
            <div
              className="angelnetworkinvestorbox"
              id="angelnetworkinvestorbox2"
            >
              This is an Institute level program being done in partnership with
              FITT, and it comes with a lot of validation. Associating with us
              directly means associating with the institute and being right
              there on the social media handles and other public activities
              related to this. We will duly recognise your contribution!
            </div>
          </div>
          <div
            className="angelnetworkinvestorimage"
            id="angelnetworkinvestorimage2"
          >
            <img src={img2} alt="" />
          </div>
        </div>

        <div
          className="angelnetworkinvestorsection"
          id="angelnetworkinvestorsection3"
        >
          <div
            className="angelnetworkinvestortext"
            id="angelnetworkinvestortext3"
          >
            {/* <div className="heading" id="heading3">
              What do we require?
            </div> */}
            <div
              className="angelnetworkinvestorbox"
              id="angelnetworkinvestorbox3"
            >
              By monitoring the progress of startups from closed quarters, you
              can be sure of the potential of the team. At early-stage
              investments this is one of the crucial aspects about any venture
              and this initiative will help you a lot in the decision making if
              your interests gets aligned with any of the startups
            </div>
          </div>
          <div
            className="angelnetworkinvestorimage"
            id="angelnetworkinvestorimage3"
          >
            <img src={img3} alt="" />
          </div>
        </div>

        <div
          className="angelnetworkinvestorsection"
          id="angelnetworkinvestorsection4"
        >
          <div
            className="angelnetworkinvestortext"
            id="angelnetworkinvestortext4"
          >
            {/* <div className="heading" id="heading4">
              What is in it for you?
            </div> */}
            <div
              className="angelnetworkinvestorbox"
              id="angelnetworkinvestorbox4"
            >
              What sort of engagement the contributors want to have into this
              program is typically up to them. We will be more than happy to
              engage.For people contributing significant amount of funds, we are
              open to discuss other ways of better engagement. What sort of
              engagement the contributors want to have into this program is
              typically up to them. We will be more than happy to engage.For
              people contributing significant amount of funds, we are open to
              discuss other ways of better engagement.
            </div>
          </div>
          <div
            className="angelnetworkinvestorimage"
            id="angelnetworkinvestorimage4"
          >
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AngelNetworkInvestorApp;
