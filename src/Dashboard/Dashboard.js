import React from "react";
import "./Dashboard.css";
import SearchIcon from "@mui/icons-material/Search";
import Mentor from "./Mentor.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard_navbar">HEADER</div>
      <div className="dashboard_body">
        <div className="dashboard_bodymain">
          <div className="dashboard_bodymain_top">
            <h1>Hello Mentor,</h1>
            <label className="dashboard_search">
              <SearchIcon />
              <input
                type="text"
                className="dashboard_searchinput"
                placeholder="Search"
              />
            </label>
          </div>
          <div className="dashboard_bodymain2">
            <button className="dashboardyellowboxes">Angel Investor</button>
            <button className="dashboardyellowboxes">
              Mentor to IITD startups in general
            </button>
          </div>
          <div className="dashboard_bodymain3">
            <h4>Choose a Field to Mentor in</h4>
            <div className="dashboard_bodymain3_bottom">
              <button className="dashboardblueboxes">Marketing</button>
              <button className="dashboardblueboxes">Research</button>
              <button className="dashboardblueboxes">Research</button>
            </div>
          </div>
          <div className="dashboard_bodymain4">
            <h2>Start-Ups you work with</h2>
            <div className="dashboard_photos">
              <div className="dashboard_photos_data">
                <img src={Mentor} className="dashboard_photos_pic" />
                <div className="dashboard_photos_name">Recools</div>
              </div>
              <div className="dashboard_photos_data">
                <img src={Mentor} className="dashboard_photos_pic" />
                <div className="dashboard_photos_name">Recools</div>
              </div>
              <div className="dashboard_photos_data">
                <img src={Mentor} className="dashboard_photos_pic" />
                <div className="dashboard_photos_name">Recools</div>
              </div>
            </div>
          </div>
          <div className="dashboard_bodymain5">
            <h2>Recent Activity</h2>
            <div className="dashboard_bodymain5_bottom">
              <div className="dashboard_bodymain5_bottomcontainer">
                sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet.
              </div>
              <div className="dashboard_bodymain5_bottomcontainer">
                sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet.
              </div>
              <div className="dashboard_bodymain5_bottomcontainer">
                sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet.
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard_bodyright">
          <div className="dashboard_bodyright_role">
            <h2>Role</h2>
          </div>
          <div className="dashboard_bodyright_bottom">
            <h2>Start-Ups you follow</h2>
            <div className="dashboardfollowstatus">
              <img src={Mentor} className="dashboardfollowstatusphoto" />
              <div className="dashboardfollowstatusinfo">
                <h3>Deepak Nanda</h3>
                <h4>Senior Consultant, BCG</h4>
                <div className="dashboardfollowstatusfollow">
                  <h4>Following</h4>
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="dashboardfollowstatus">
              <img src={Mentor} className="dashboardfollowstatusphoto" />
              <div className="dashboardfollowstatusinfo">
                <h3>Deepak Nanda</h3>
                <h4>Senior Consultant, BCG</h4>
                <div className="dashboardfollowstatusfollow">
                  <h4>Following</h4>
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="dashboardfollowstatus">
              <img src={Mentor} className="dashboardfollowstatusphoto" />
              <div className="dashboardfollowstatusinfo">
                <h3>Deepak Nanda</h3>
                <h4>Senior Consultant, BCG</h4>
                <div className="dashboardfollowstatusfollow">
                  <h4>Following</h4>
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
            <div className="dashboardfollowstatus">
              <img src={Mentor} className="dashboardfollowstatusphoto" />
              <div className="dashboardfollowstatusinfo">
                <h3>Deepak Nanda</h3>
                <h4>Senior Consultant, BCG</h4>
                <div className="dashboardfollowstatusfollow">
                  <h4>Following</h4>
                  <ExpandMoreIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
