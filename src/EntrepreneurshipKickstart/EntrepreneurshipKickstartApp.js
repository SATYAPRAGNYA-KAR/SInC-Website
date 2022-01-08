import "./EntrepreneurshipKickstartApp.css";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import processcard from "./images/processcard.png";
import amico from "./images/amico.png";
import bulb from "./images/bulb.png";
// import dp from "./images/dp.png";
import Header from "./EntrepreneurshipKickstartHeader";
import { Link } from "react-router-dom";

function EntrepreneurshipKickstartApp() {
  return (
    <div className="entrepreneurshipkickstartApp">
      <Header />
      <div className="entrepreneurshipkickstartsection1">
        <div className="entrepreneurshipkickstartsection1-heading">
          Entrepreneurship Kickstart
        </div>
        <div className="entrepreneurshipkickstartyellow-underline"></div>
        <div className="entrepreneurshipkickstartsection1-text">
          A robust entrepreneurial program to spark great ideas and nurture
          their growth into remarable new ventures
        </div>
        <div className=""></div>
      </div>

      <div className="entrepreneurshipkickstartsection2">
        <div className="entrepreneurshipkickstartsection2-top">
          <div className="entrepreneurshipkickstarttop1">
            <img src={img1} alt="entrepreneurshipkickstartcheckbox icon"></img>
          </div>

          <div className="entrepreneurshipkickstarttop2"></div>

          <div className="entrepreneurshipkickstarttop3">
            <img src={img3} alt="discussion icon"></img>
          </div>

          <div className="entrepreneurshipkickstarttop4"></div>

          <div className="entrepreneurshipkickstarttop5">
            <img src={img5} alt="Icon"></img>
          </div>

          <div className="entrepreneurshipkickstarttop6"></div>
        </div>

        <div className="entrepreneurshipkickstartsection2-bottom">
          <div className="entrepreneurshipkickstartbottom1"></div>

          <div className="entrepreneurshipkickstartbottom2">
            <img src={img2} alt="discussion icon"></img>
          </div>

          <div className="entrepreneurshipkickstartbottom3"></div>

          <div className="entrepreneurshipkickstartbottom4">
            <img src={img4} alt="Icon"></img>
          </div>

          <div className="entrepreneurshipkickstartbottom5"></div>

          <div className="entrepreneurshipkickstartbottom6">
            <img src={img6} alt="Icon"></img>
          </div>
        </div>
      </div>

      <div className="entrepreneurshipkickstartsection3">
        <div className="entrepreneurshipkickstartsection3-box">
          The start and end point could be anywhere in between this cycle based
          upon what is an achievable goal for a particular startup in a certain
          time frame (6-9 months). It is possible to increase this, but the
          first goal should typically lie in this time frame.
        </div>
        <div className="entrepreneurshipkickstartsection3-img">
          <img src={amico} alt="" />
        </div>

        <div className="entrepreneurshipkickstartsection4">
          <div className="entrepreneurshipkickstartleft">
            <div className="entrepreneurshipkickstartleft-green-line"></div>
            <div className="entrepreneurshipkickstartleft-text">
              Here's how process will get going
            </div>
          </div>

          <div className="entrepreneurshipkickstartright">
            <img src={bulb} alt="icon"></img>
            <div className="entrepreneurshipkickstartright-greenline"></div>
            <div className="entrepreneurshipkickstartright-text">
              We help your startup!
            </div>
          </div>
        </div>

        {/* <div className='section5'>
        </div> */}

        <div className="entrepreneurshipkickstartsection5">
          <img src={processcard} alt="process card"></img>
        </div>

        <div className="entrepreneurshipkickstartsection6">
          <div className="entrepreneurshipkickstartsection6-heading">
            Mentor, Investor and Nurturing Funds
          </div>
          <div className="entrepreneurshipkickstartyellow-line"></div>
          <div className="entrepreneurshipkickstartsection6-box">
            <div className="entrepreneurshipkickstartbox-left">
              <div className="entrepreneurshipkickstartleft-heading">
                Mentor
              </div>
              <div className="entrepreneurshipkickstartbox-left-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin ullamcorper amet nisi sed a sed. Mattis at nisl
                gravida feugiat quam. Congue etiam consectetur massa lectus
                interdum condimentum sapien, ac ac. Quis eget neque suscipit dis
                condimentum dictum.
              </div>
            </div>
            <div className="entrepreneurshipkickstartbox-right">
              <Link to="/registerpage" style={{ textDecoration: "none" }}>
                <button className="entrepreneurshipkickstartbutton1">
                  Register
                </button>
              </Link>
              <Link to="/angelnetworkmentor" style={{ textDecoration: "none" }}>
                <button className="entrepreneurshipkickstartbutton2">
                  Know more
                </button>
              </Link>
            </div>
          </div>
          <div className="entrepreneurshipkickstartsection6-box">
            <div className="entrepreneurshipkickstartbox-left">
              <div className="entrepreneurshipkickstartleft-heading">
                Investor
              </div>
              <div className="entrepreneurshipkickstartbox-left-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin ullamcorper amet nisi sed a sed. Mattis at nisl
                gravida feugiat quam. Congue etiam consectetur massa lectus
                interdum condimentum sapien, ac ac. Quis eget neque suscipit dis
                condimentum dictum.
              </div>
            </div>
            <div className="entrepreneurshipkickstartbox-right">
              <Link to="/registerpage" style={{ textDecoration: "none" }}>
                <button className="entrepreneurshipkickstartbutton1">
                  Register
                </button>
              </Link>
              <Link
                to="/angelnetworkinvestor"
                style={{ textDecoration: "none" }}
              >
                <button className="entrepreneurshipkickstartbutton2">
                  Know more
                </button>
              </Link>
            </div>
          </div>
          <div className="entrepreneurshipkickstartsection6-box">
            <div className="entrepreneurshipkickstartbox-left">
              <div className="entrepreneurshipkickstartleft-heading">
                Mentor
              </div>
              <div className="entrepreneurshipkickstartbox-left-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin ullamcorper amet nisi sed a sed. Mattis at nisl
                gravida feugiat quam. Congue etiam consectetur massa lectus
                interdum condimentum sapien, ac ac. Quis eget neque suscipit dis
                condimentum dictum.
              </div>
            </div>
            <div className="entrepreneurshipkickstartbox-right">
              <Link to="/registerpage" style={{ textDecoration: "none" }}>
                <button className="entrepreneurshipkickstartbutton1">
                  Register
                </button>
              </Link>
              <Link to="/angelnetworkmentor" style={{ textDecoration: "none" }}>
                <button className="entrepreneurshipkickstartbutton2">
                  Know more
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className='section7'>
          <div className='section7-heading'>
            People with us
          </div>
          <div className='yellow-line'></div>
          <div className='section7-content'>
            <div className='section7-box'>
              <img src={dp} alt='profile picture'></img>
              <div className='details'>
                <div className='details-heading'>Charvi</div>
                <div className='details-desc'>Project Head</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default EntrepreneurshipKickstartApp;
