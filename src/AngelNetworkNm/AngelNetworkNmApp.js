import "./AngelNetworkNmApp.css";
import Header from "../AngelNetworkInvestor/AngelNetworkInvestorHeader";
import Footer from "../AngelNetworkInvestor/AngelNetworkInvestorFooter";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import {Link} from 'react-router-dom';

function AngelNetworkNmApp() {
  return (
    <div className="angelnetworknmApp">
      <div className="angelnetworknm_header">
        <Header/>
      </div>
      <div className="angelnetworknmbuttons">
        <div className="angelnetworknmbutton1">
        <Link to='/angelnetworkmentor'><button>Mentors</button></Link>
        </div>
        <div className="angelnetworknmbutton2">
        <Link to='/angelnetworkinvestor'><button>What is in it for you</button></Link>
        </div>
        <div className="angelnetworknmbutton3">
        <Link to='/angelnetworknm'><button>Nurturing Funds</button></Link>
        </div>
      </div>
      <div className="angelnetworknmunderline">
        <div className="angelnetworknmbold"></div>
        <div className="angelnetworknmthin"></div>
      </div>

      <div className="angelnetworknmcontainer">
        <div className="angelnetworknmsection" id="angelnetworknmsection1">
          <div className="angelnetworknmtext" id="angelnetworknmtext1">
            <div className="angelnetworknmheading" id="angelnetworknmheading1">
              What role will these funds play?
            </div>
            <div className="angelnetworknmbox" id="angelnetworknmbox1">
              Some of the student startups at initial stages require little
              amount of capital to take things off-ground. This becomes a
              barrier and at times a significant one for some of them which can
              refrain their startups from going places. We don’t want this to be
              a cause and hence are looking to build a fund of INR 15 Lakhs that
              can be used to nurture student startups.
            </div>
          </div>
          <div className="angelnetworknmimage" id="angelnetworknmimage1">
            <img src={img1} alt="" />
          </div>
        </div>

        <div className="angelnetworknmsection" id="angelnetworknmsection2">
          <div className="angelnetworknmtext" id="angelnetworknmtext2">
            <div className="angelnetworknmheading" id="angelnetworknmheading2">
              Do startups really need these funds?
            </div>
            <div className="angelnetworknmbox" id="angelnetworknmbox2">
              Not every student startup will have this requirement but for those
              who do, this should not pose a challenge or seen as a limitation.
              Some of the ways through which these funds can be useful for
              startups are :<br />
              To onboard some interns that can help the founder assist with a
              skillset that he/she might not have
              <br />
              For initial MVP development both from technical and physical point
              of view
              <br />
              For gaining initial traction onto the product or a service and
              that this could really help them go through
              <br />
              These are specific to the domain the startups are operating in and
              hence we want to have room to accommodate those
            </div>
          </div>
          <div className="angelnetworknmimage" id="angelnetworknmimage2">
            <img src={img2} alt="" />
          </div>
        </div>

        <div className="angelnetworknmsection" id="angelnetworknmsection3">
          <div className="angelnetworknmtext" id="angelnetworknmtext3">
            <div className="angelnetworknmheading" id="angelnetworknmheading3">
              What do we require?
            </div>
            <div className="angelnetworknmbox" id="angelnetworknmbox3">
              We are looking to partner with alumni, individually or through
              their organizations through CSR funds/Official Partner , who
              believe in our mission of changing the way entrepreneurship is
              being looked at in the campus. We are inviting contribution with a
              ticket size of minimum 50,000/- and we are looking to build a fund
              of 15 Lakhs to be used in nurturing.
            </div>
          </div>
          <div className="angelnetworknmimage" id="angelnetworknmimage3">
            <img src={img3} alt="" />
          </div>
        </div>

        <div className="angelnetworknmsection" id="angelnetworknmsection4">
          <div className="angelnetworknmtext" id="angelnetworknmtext4">
            <div className="angelnetworknmheading" id="angelnetworknmheading4">
              What is in it for you?
            </div>
            <div className="angelnetworknmbox" id="angelnetworknmbox4">
              Associating with us means getting an early access to the upcoming
              startups and ideas that are being born out of your alma mater. An
              institute of Eminence which boasts of producing the highest number
              of unicorns amongst any other institute in India and many other
              laurels, thanks to the legacy of you guys.
              <br />
              <br />
              This is an Institute level program being done in partnership with
              FITT, and it comes with a lot of validation. Associating with us
              directly means associating with the institute and being right
              there on the social media handles and other public activities
              related to this. We will duly recognise your contribution!
            </div>
          </div>
          <div className="angelnetworknmimage" id="angelnetworknmimage4">
            <img src={img4} alt="" />
          </div>
        </div>

        <div className="angelnetworknmsection" id="angelnetworknmsection5">
          <div className="angelnetworknmtext" id="angelnetworknmtext5"></div>
          <div className="angelnetworknmbox" id="angelnetworknmbox5">
            By monitoring the progress of startups from closed quarters, you can
            be sure of the potential of the team. At early-stage investments
            this is one of the crucial aspects about any venture and this
            initiative will help you a lot in the decision making if your
            interests gets aligned with any of the startups.
            <br />
            <br />
            What sort of engagement the contributors want to have into this
            program is typically up to them. We will be more than happy to
            engage.For people contributing significant amount of funds, we are
            open to discuss other ways of better engagement.
          </div>
          <div className="angelnetworknmimage" id="angelnetworknmimage5">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
      <div className="angelnetworknm_footer">
        <Footer/>
      </div>
    </div>
  );
}

export default AngelNetworkNmApp;
