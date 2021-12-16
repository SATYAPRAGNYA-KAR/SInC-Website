import "./AngelNetworkMentorApp.css";
import Header from "./AngelNetworkMentorHeader";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import {Link} from 'react-router-dom';

function AngelNetworkMentorApp() {
  return (
    <div className="angelnetworkmentorApp">
      <Header />
      <div className="angelnetworkmentorbuttons">
        <div className="angelnetworkmentorbutton1">
          <Link to='/angelnetworkmentor'><button>Mentors</button></Link>
        </div>
        <div className="angelnetworkmentorbutton2">
        <Link to='/angelnetworkinvestor'><button>What is in it for you</button></Link>
        </div>
        <div className="angelnetworkmentorbutton3">
        <Link to='/angelnetworknm'><button>Nurturing Funds</button></Link>
        </div>
      </div>
      <div className="angelnetworkmentorunderline">
        <div className="angelnetworkmentorbold"></div>
        <div className="angelnetworkmentorthin"></div>
      </div>

      <div className="angelnetworkmentorcontainer">
        <div
          className="angelnetworkmentorsection"
          id="angelnetworkmentorsection1"
        >
          <div className="angelnetworkmentortext" id="angelnetworkmentortext1">
            <div
              className="angelnetworkmentorheading"
              id="angelnetworkmentorheading1"
            >
              Functions
            </div>
            <div className="angelnetworkmentorbox" id="angelnetworkmentorbox1">
              • Helping startups set right goals which is achievable in a span
              of 6-9 months i.e. the duration of one cycle of this initiative. •
              Helping the Startup validate their problem statement.
              <br />
              <br />
              • Helping them validate their solutions again via calls arranged
              with few potential customers.
              <br />
              <br />
              • Helping them identify immediate market for their product.
              <br />
              <br />
              • Working with them to identify key metrics to track.
              <br />
              <br />
              • Reviewing action plan and checkpoints for every 3rd week to
              achieve the goal.
              <br />
              <br />
              <br />
              All this while, mentors just need to guide them to the right path
              and not to handhold startups. The hustle has to be theirs
            </div>
          </div>
          <div
            className="angelnetworkmentorimage"
            id="angelnetworkmentorimage1"
          >
            <img src={img1} alt="" />
          </div>
        </div>

        <div
          className="angelnetworkmentorsection"
          id="angelnetworkmentorsection2"
        >
          <div className="angelnetworkmentortext" id="angelnetworkmentortext2">
            <div
              className="angelnetworkmentorheading"
              id="angelnetworkmentorheading2"
            >
              How much time is expected of me?
            </div>
            <div className="angelnetworkmentorbox" id="angelnetworkmentorbox2">
              We expect 3-4 hrs a month. Availability through mails and personal
              messaging during the week is much appreciated.
            </div>
          </div>
          <div
            className="angelnetworkmentorimage"
            id="angelnetworkmentorimage2"
          >
            <img src={img2} alt="" />
          </div>
        </div>

        <div
          className="angelnetworkmentorsection"
          id="angelnetworkmentorsection3"
        >
          <div className="angelnetworkmentortext" id="angelnetworkmentortext3">
            <div
              className="angelnetworkmentorheading"
              id="angelnetworkmentorheading3"
            >
              What will I get in return?
            </div>
            <div className="angelnetworkmentorbox" id="angelnetworkmentorbox3">
              If the nurturing provided by the mentors, has helped the startup
              significantly improve themselves from the current stage then as
              per the judgement of the committee and mutual understanding
              between the mentor and the startups, Mentors would be entitled for
              equity in the startup.
              <br /> <br />
              Since this initiative is being launched in partnership with FITT
              it comes with a lot of validation. We will duly recognise your
              contribution through our social media handles, website and other
              public events. Other than this we can always look out for better
              ways of engagement through partnerships
            </div>
          </div>
          <div
            className="angelnetworkmentorimage"
            id="angelnetworkmentorimage3"
          >
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AngelNetworkMentorApp;
