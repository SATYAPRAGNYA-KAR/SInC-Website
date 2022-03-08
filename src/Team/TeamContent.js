import React from "react";
import "./TeamContent.css";
import ln from "./ln.png";
import gh from "./gh.png";
import ig from "./ig.png";
import photo from "./photo.jpg";

function Content() {
  return (
    
    <div className="teamcontent">
       <br></br><br></br><br></br><br></br>
      <div className="teamcontentcoordinator">
        <div className="teamcontentcoordinator_desc">
          {/* <h1>Yaman Garg</h1>
          <div className="teamcontentcoordinator_desc_position">
            Web Development Coordinator
          </div> */}
          {/* <div className="teamcontentcoordinator_desc_profile">
            <img src={ig} alt="" style={{}} />
            <img src={gh} alt="" style={{}} />
            <img src={ln} alt="" style={{}} />
          </div> */}
        
          <div className="container-fluid">
            <div className="row">
               <div className="col-md-6">
                <h1>Nitesh Saini</h1>
                {/* <hr></hr> */}
                <center><h5>Web Development Coordinator</h5></center>
                <div className="teamcontentcoordinator_desc_profile">
            <img src={ig} alt="" style={{}} />
            <img src={gh} alt="" style={{}} />
            <img src={ln} alt="" style={{}} />
          </div>
                </div>
                <div className="col-md-6">
               <center> <img
            src={photo}
            alt=""
            style={{ border: "10px solid yellow", borderRadius: "50%"}}
          />
          </center>
                  </div>
              </div>  
          </div>
        </div>
        <div className="teamcontentcoordinator_pic">
          
        </div>
      </div>

      <div className="teamcontenttechnical">
        <div className="teamcontenttechnical_heading">
          <h2>Technical Team</h2>
        </div>
        <div className="teamcontenttechnical_info">
          <div className="teamcontenttechnical_infocard">
            <img
              src={photo}
              alt=""
              style={{ width: "60%", height: "60%", border: "10px solid yellow", borderRadius: "50%"}}
            />
            <div className="teamcontenttechnical_infocard_content">
              <h3>Mihir Jain</h3>
              <div className="teamcontentcoordinator_desc_position">
                Web Development Coordinator
              </div>
              <div className="teamcontentcoordinator_desc_profile">
                <img
                  src={ig}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={gh}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={ln}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
          <div className="teamcontenttechnical_infocard">
            <img
              src={photo}
              alt=""
              style={{ width: "60%", height: "60%", border: "10px solid yellow", borderRadius: "50%" }}
            />
            <div className="teamcontenttechnical_infocard_content">
              <h3>Mihir Jain</h3>
              <div className="teamcontentcoordinator_desc_position">
                Web Development Coordinator
              </div>
              <div className="teamcontentcoordinator_desc_profile">
                <img
                  src={ig}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={gh}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={ln}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
          <div className="teamcontenttechnical_infocard">
            <img
              src={photo}
              alt=""
              style={{ width: "60%", height: "60%", border: "10px solid yellow", borderRadius: "50%" }}
            />
            <div className="teamcontenttechnical_infocard_content">
              <h3>Mihir Jain</h3>
              <div className="teamcontentcoordinator_desc_position">
                Web Development Coordinator
              </div>
              <div className="teamcontentcoordinator_desc_profile">
                <img
                  src={ig}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={gh}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={ln}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
          <div className="teamcontenttechnical_infocard">
            <img
              src={photo}
              alt=""
              style={{ width: "60%", height: "60%", border: "10px solid yellow", borderRadius: "50%"}}
            />
            <div className="teamcontenttechnical_infocard_content">
              <h3>Mihir Jain</h3>
              <div className="teamcontentcoordinator_desc_position">
                Web Development Coordinator
              </div>
              <div className="teamcontentcoordinator_desc_profile">
                <img
                  src={ig}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={gh}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={ln}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
          <div className="teamcontenttechnical_infocard">
            <img
              src={photo}
              alt=""
              style={{ width: "60%", height: "60%", border: "10px solid yellow", borderRadius: "50%"}}
            />
            <div className="teamcontenttechnical_infocard_content">
              <h3>Mihir Jain</h3>
              <div className="teamcontentcoordinator_desc_position">
                Web Development Coordinator
              </div>
              <div className="teamcontentcoordinator_desc_profile">
                <img
                  src={ig}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={gh}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={ln}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
          <div className="teamcontenttechnical_infocard">
            <img
              src={photo}
              alt=""
              style={{ width: "60%", height: "60%", border: "10px solid yellow", borderRadius: "50%"}}
            />
            <div className="teamcontenttechnical_infocard_content">
              <h3>Mihir Jain</h3>
              <div className="teamcontentcoordinator_desc_position">
                Web Development Coordinator
              </div>
              <div className="teamcontentcoordinator_desc_profile">
                <img
                  src={ig}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={gh}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={ln}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="teamcontentdesign">
        <div className="teamcontenttechnical_heading">
          <h2>Design Team</h2>
        </div>
        <div className="teamcontenttechnical_info">
          <div className="teamcontenttechnical_infocard">
            <img
              src={photo}
              alt=""
              style={{ width: "60%", height: "60%", border: "10px solid yellow", borderRadius: "50%"}}
            />
            <div className="teamcontenttechnical_infocard_content">
              <h3>Mihir Jain</h3>
              <div className="teamcontentcoordinator_desc_position">
                Web Development Coordinator
              </div>
              <div className="teamcontentcoordinator_desc_profile">
                <img
                  src={ig}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={gh}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={ln}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
          <div className="teamcontenttechnical_infocard">
            <img
              src={photo}
              alt=""
              style={{ width: "60%", height: "60%", border: "10px solid yellow", borderRadius: "50%"}}
            />
            <div className="teamcontenttechnical_infocard_content">
              <h3>Mihir Jain</h3>
              <div className="teamcontentcoordinator_desc_position">
                Web Development Coordinator
              </div>
              <div className="teamcontentcoordinator_desc_profile">
                <img
                  src={ig}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={gh}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={ln}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
          <div className="teamcontenttechnical_infocard">
            <img
              src={photo}
              alt=""
              style={{ width: "60%", height: "60%", border: "10px solid yellow", borderRadius: "50%"}}
            />
            <div className="teamcontenttechnical_infocard_content">
              <h3>Mihir Jain</h3>
              <div className="teamcontentcoordinator_desc_position">
                Web Development Coordinator
              </div>
              <div className="teamcontentcoordinator_desc_profile">
                <img
                  src={ig}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={gh}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={ln}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
          <div className="teamcontenttechnical_infocard">
            <img
              src={photo}
              alt=""
              style={{ width: "60%", height: "60%", border: "10px solid yellow", borderRadius: "50%"}}
            />
            <div className="teamcontenttechnical_infocard_content">
              <h3>Mihir Jain</h3>
              <div className="teamcontentcoordinator_desc_position">
                Web Development Coordinator
              </div>
              <div className="teamcontentcoordinator_desc_profile">
                <img
                  src={ig}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={gh}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={ln}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
          <div className="teamcontenttechnical_infocard">
            <img
              src={photo}
              alt=""
              style={{ width: "60%", height: "60%", border: "10px solid yellow", borderRadius: "50%"}}
            />
            <div className="teamcontenttechnical_infocard_content">
              <h3>Mihir Jain</h3>
              <div className="teamcontentcoordinator_desc_position">
                Web Development Coordinator
              </div>
              <div className="teamcontentcoordinator_desc_profile">
                <img
                  src={ig}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={gh}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={ln}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
          <div className="teamcontenttechnical_infocard">
            <img
              src={photo}
              alt=""
              style={{ width: "60%", height: "60%", border: "10px solid yellow", borderRadius: "50%"}}
            />
            <div className="teamcontenttechnical_infocard_content">
              <h3>Mihir Jain</h3>
              <div className="teamcontentcoordinator_desc_position">
                Web Development Coordinator
              </div>
              <div className="teamcontentcoordinator_desc_profile">
                <img
                  src={ig}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={gh}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={ln}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
