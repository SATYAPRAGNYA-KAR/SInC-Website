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
import dp from "./images/dp.png";
import Header from "./Navbar";
import "./Navbar.css"
import Footer from "./EntrepreneurshipKickstartFooter";
import { Link } from "react-router-dom";
// import section2img from "./images/section2.png";
import imgtop from "./images/yellow-black-top.png";
import imgbot from "./images/yellow-black-bottom.png";
import ideas from "./images/ideas.png";
import ybbig from "./images/yellow-black-big.png";
import ybsmall from "./images/yellow-black-small.png";
const icon = "icon";

function EntrepreneurshipKickstartApp() {
  return (
    <div className="entrepreneurshipkickstartApp">
      <div className="entrepreneurshipkickstart_header">
        <Header />
      </div>

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

      <div className="ek-section2">
        <div className="ek-sec2-top">
          <div className="ek-sec2-top-content1">
            <div className="ek-sec2-top-heading">
              Formal Screening & Pitching
            </div>
            <div className="ek-sec2-top-desc">
              Formal screening by the panel members and segregation based upon
              ready to be funded/ incubated or nurturing required
            </div>
          </div>

          <div className="ek-sec2-top-content2">
            <div className="ek-sec2-top-heading">Nurturing-2</div>
            <div className="ek-sec2-top-desc">
              Mentors to be alloted, various workshops to guide, checkpoints to
              be put in place and startup is in a phase of making things more
              concrete
            </div>
          </div>

          <div className="ek-sec2-top-content3">
            <div className="ek-sec2-top-heading">Full Scale-2</div>
            <div className="ek-sec2-top-desc">
              Testing of MVP, Reiterations, Design completion, Public Display
            </div>
          </div>
        </div>
        <div className="ek-sec2">
          <div className="ek-sec2-box">
            <div className="ek-sec2-box-half1">
              <img className="ek-sec2-img1" src={img1} alt={icon}></img>
            </div>
            <div className="ek-sec2-box-half2">
              <img className="yb2" src={imgbot} alt={icon}></img>
            </div>
          </div>

          <div className="ek-sec2-box">
            <div className="ek-sec2-box-half1">
              <img className="yb1" src={imgtop} alt={icon}></img>
            </div>
            <div className="ek-sec2-box-half2">
              <img className="ek-sec2-img2" src={img2} alt={icon}></img>
            </div>
          </div>

          <div className="ek-sec2-box">
            <div className="ek-sec2-box-half1">
              <img className="ek-sec2-img3" src={img3} alt={icon}></img>
            </div>
            <div className="ek-sec2-box-half2">
              <img className="yb2" src={imgbot} alt={icon}></img>
            </div>
          </div>

          <div className="ek-sec2-box">
            <div className="ek-sec2-box-half1">
              <img className="yb1" src={imgtop} alt={icon}></img>
            </div>
            <div className="ek-sec2-box-half2">
              <img className="ek-sec2-img4" src={img4} alt={icon}></img>
            </div>
          </div>

          <div className="ek-sec2-box">
            <div className="ek-sec2-box-half1">
              <img className="ek-sec2-img5" src={img5} alt={icon}></img>
            </div>
            <div className="ek-sec2-box-half2">
              <img className="yb2" src={imgbot} alt={icon}></img>
            </div>
          </div>

          <div className="ek-sec2-box">
            <div className="ek-sec2-box-half1">
              <img className="yb1" src={imgtop} alt={icon}></img>
            </div>
            <div className="ek-sec2-box-half2">
              <img className="ek-sec2-img6" src={img6} alt={icon}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="ek-sec2-bottom">
        <div className="ek-sec2-bottom-content1">
          <div className="ek-sec2-bottom-heading">
            Launching & Pre-screening
          </div>
          <div className="ek-sec2-bottom-desc">
            Launching of the program, after a short span of time applications
            will be invited. Startups will be screened based upon the selection
            criteria listed.
          </div>
        </div>

        <div className="ek-sec2-bottom-content2">
          <div className="ek-sec2-bottom-heading">Nurturing-1</div>
          <div className="ek-sec2-bottom-desc">
            Nurturing phase based upon the current stage of startup, end goal
            after the program to be decided
          </div>
        </div>

        <div className="ek-sec2-bottom-content3">
          <div className="ek-sec2-bottom-heading">Full Scale-1</div>
          <div className="ek-sec2-bottom-desc">
            Developement of MVP or Primary designing of product, possibility of
            funding etc.
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

            <div className="entrepreneurshipkickstartright-text">
              <div className="entrepreneurshipkickstart-green-line2"></div>
              We
              <br /> help
              <br /> your
              <br /> startup!
            </div>
          </div>
        </div>

        {/* <div className='section5'>
        </div> */}

        <div className="entrepreneurshipkickstartsection5">
          <img src={processcard} alt="process card"></img>
        </div>

        <div className="entrepreneurshipkickstartsection6">
          <div className="entrepreneurshipkickstart-61">
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
                  interdum condimentum sapien, ac ac. Quis eget neque suscipit
                  dis condimentum dictum.
                </div>
              </div>
              <div className="entrepreneurshipkickstartbox-right">
                <Link to="/registerpage" style={{ textDecoration: "none" }}>
                  <button className="entrepreneurshipkickstartbutton1">
                    Register
                  </button>
                </Link>
                <Link
                  to="/angelnetworkmentor"
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
                  Investor
                </div>
                <div className="entrepreneurshipkickstartbox-left-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sollicitudin ullamcorper amet nisi sed a sed. Mattis at nisl
                  gravida feugiat quam. Congue etiam consectetur massa lectus
                  interdum condimentum sapien, ac ac. Quis eget neque suscipit
                  dis condimentum dictum.
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
                  interdum condimentum sapien, ac ac. Quis eget neque suscipit
                  dis condimentum dictum.
                </div>
              </div>
              <div className="entrepreneurshipkickstartbox-right">
                <Link to="/registerpage" style={{ textDecoration: "none" }}>
                  <button className="entrepreneurshipkickstartbutton1">
                    Register
                  </button>
                </Link>
                <Link
                  to="/angelnetworkmentor"
                  style={{ textDecoration: "none" }}
                >
                  <button className="entrepreneurshipkickstartbutton2">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="entrepreneurshipkickstart-62">
            <div className="entrepreneurshipkickstart-621">
              <img src={ybbig} alt="just for design"></img>
            </div>
            <div className="entrepreneurshipkickstart-622">
              <img src={ybsmall} alt="just for design"></img>
            </div>
            <div className="entrepreneurshipkickstart-623">
              <img
                src={ideas}
                alt="two animated characters discussing some ideas"
              ></img>
            </div>
          </div>
        </div>
        <div className=".entrepreneurshipkickstartsection7">
          <div className="entrepreneurshipkickstartsection7-heading">
            People with us
          </div>
          <div className="entrepreneurshipkickstartyellow-line"></div>
          <div className="entrepreneurshipkickstartsection7-content">
            <div className="entrepreneurshipkickstartsection7-box">
              <div className="entrepreneurshipkickstartdpdiv">
                <img
                  className="entrepreneurshipkickstartdp"
                  src={dp}
                  alt="profile"
                ></img>
              </div>
              <div className="details">
                <div className="entrepreneurshipkickstartdetails-heading">
                  Charvi
                </div>
                <div className="entrepreneurshipkickstartdetails-desc">
                  Project Head
                </div>
              </div>
            </div>
            <div className="entrepreneurshipkickstartsection7-box">
              <div className="entrepreneurshipkickstartdpdiv">
                <img
                  className="entrepreneurshipkickstartdp"
                  src={dp}
                  alt="profile"
                ></img>
              </div>
              <div className="details">
                <div className="entrepreneurshipkickstartdetails-heading">
                  Charvi
                </div>
                <div className="entrepreneurshipkickstartdetails-desc">
                  Project Head
                </div>
              </div>
            </div>
            <div className="entrepreneurshipkickstartsection7-box">
              <div className="entrepreneurshipkickstartdpdiv">
                <img
                  className="entrepreneurshipkickstartdp"
                  src={dp}
                  alt="profile"
                ></img>
              </div>
              <div className="entrepreneurshipkickstartdetails">
                <div className="entrepreneurshipkickstartdetails-heading">
                  Charvi
                </div>
                <div className="entrepreneurshipkickstartdetails-desc">
                  Project Head
                </div>
              </div>
            </div>
            <div className="entrepreneurshipkickstartsection7-box">
              <div className="entrepreneurshipkickstartdpdiv">
                <img
                  className="entrepreneurshipkickstartdp"
                  src={dp}
                  alt="profile"
                ></img>
              </div>
              <div className="entrepreneurshipkickstartdetails">
                <div className="entrepreneurshipkickstartdetails-heading">
                  Charvi
                </div>
                <div className="entrepreneurshipkickstartdetails-desc">
                  Project Head
                </div>
              </div>
            </div>
            <div className="entrepreneurshipkickstartsection7-box">
              <div className="entrepreneurshipkickstartdpdiv">
                <img
                  className="entrepreneurshipkickstartdp"
                  src={dp}
                  alt="profile"
                ></img>
              </div>
              <div className="entrepreneurshipkickstartdetails">
                <div className="entrepreneurshipkickstartdetails-heading">
                  Charvi
                </div>
                <div className="entrepreneurshipkickstartdetails-desc">
                  Project Head
                </div>
              </div>
            </div>
            <div className="entrepreneurshipkickstartsection7-box">
              <div className="entrepreneurshipkickstartdpdiv">
                <img
                  className="entrepreneurshipkickstartdp"
                  src={dp}
                  alt="profile"
                ></img>
              </div>
              <div className="entrepreneurshipkickstartdetails">
                <div className="entrepreneurshipkickstartdetails-heading">
                  Charvi
                </div>
                <div className="entrepreneurshipkickstartdetails-desc">
                  Project Head
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="entrepreneurshipkickstart_footer">
        <Footer />
      </div>
    </div>
  );
}

export default EntrepreneurshipKickstartApp;
