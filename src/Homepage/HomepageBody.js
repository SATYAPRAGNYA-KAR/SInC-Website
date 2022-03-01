import React from "react";
import "./HomepageBody.css";
import dn from "./Images/dn.png";
import about from "./Images/about.png";
import mission from "./Images/mission.png";
import vision from "./Images/vision.png";
import { Link } from "react-router-dom";
import "./SideNavigationBarApp.css";
import SideNavigationBarApp from "./SideNavigationBarApp";

function Body() {
  return (
    <div className="homebody">
      {/* <div className="sidebardiv">
        <SideNavigationBarApp />
      </div> */}

      <div className="homebody1">
        <div className="homebody-tag1">
          <h2>Entrepreneurship Challenge</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <Link to="registerpage" style={{ textDecoration: "none" }}>
            <div className="homebody__button1">
              <button type="button">Register Now</button>
            </div>
          </Link>
        </div>
        <div className="homebody-tag2">
          <h2>Fundraiser</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="fundraiser_bottom">
            <div className="fundraiser_bar">
              <div className="fundraiser_bar_content"></div>
              <div className="fundraiser_bar_percent">
                <b>78%</b>
              </div>
            </div>
            <Link to="registerpage" style={{ textDecoration: "none" }}>
              <div className="homebody__button2">
                <button type="button">Contribute</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="homebody-tag3">
          <div className="homebodyimg">
            <img src={dn} className="homebodyimg" alt="" />
            <div className="homebodyimg1">Charvi</div>
            <div className="homebodyimg2">SInC Head</div>
          </div>
          <div className="homebodyimg-content">
            <div className="homebodyimg1">imperdiet dui accumsan sit amet</div>
            <div className="homebodyimg2">
              eget mi proin sed libero enim sed faucibus turpis in eu mi
              bibendum neque egestas congue quisque egestas diam in
            </div>
          </div>
        </div>
        <div className="homebody-tag3">
          <div className="homebodyimg">
            <img src={dn} className="homebodyimg" alt="" />
            <div className="homebodyimg1">Charvi</div>
            <div className="homebodyimg2">SInC Head</div>
          </div>
          <div className="homebodyimg-content">
            <div className="homebodyimg1">imperdiet dui accumsan sit amet</div>
            <div className="homebodyimg2">
              eget mi proin sed libero enim sed faucibus turpis in eu mi
              bibendum neque egestas congue quisque egestas diam in
            </div>
          </div>
        </div>
        <div className="homebody-tag5">
          <div className="homebody-tag5-card">
            <div className="homebody-tag5-card-img">
              <img
                src={about}
                className="homebodyimg"
                alt="About"
                style={{ width: "100%", marginLeft: "20px" }}
              />
            </div>
            <div className="homebody-tag5-card-content">
              <h1>About Us</h1>
              <br />
              <p>
                Well!, we construct roadmaps and keep to the deadlines we set. We never back 
                down and always follow through on our promises. We believe in transparency; 
                thus, our startup members and acquaintances are always kept up to date on 
                the latest events and happenings.
              </p>
            </div>
          </div>
          <div className="homebody-tag5-card">
            <div className="homebody-tag5-card-content">
              <h1>Our Mission</h1>
              <br />
              <p>
                Our mission is to empower every student on campus who aims high to turn their 
                ideas into a real-world startup in every manner feasible and assist them in 
                making a smooth transition through each stage of the process. As they say, "It's
                not about ideas, it's about making ideas happen", and we are committed to 
                paving the path for them with every step they take. Our motto is to create an ecosystem 
                that encourages students to explore their ideas freely by fostering constructive 
                discussions with professors, industry veterans, investors, and peers. 
                We aspire to aid all budding entrepreneurs at IIT Delhi to become established,
                successful and independent entrepreneurs.

              </p>
            </div>
            <div
              className="homebody-tag5-card-img"
              style={{ marginRight: "60px" }}
            >
              <img
                src={mission}
                className="homebodyimg"
                alt="About"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="homebody-tag5-card">
            <div className="homebody-tag5-card-img">
              <img
                src={vision}
                className="homebodyimg"
                alt="About"
                style={{ width: "100%" }}
              />
            </div>
            <div className="homebody-tag5-card-content">
              <h1>Our Vision</h1>
              <br />
              <p>
                We want IIT Delhi to become the flag bearer, not just in India but across the world.
                We provide students a plethora of amenities, including mentorship, 
                incubation space(of which most of the startups are bereft of), the much-needed legal expertise,
                which is as imperative as anything to launch a successful startup and funds. We connect students
                with industry experts and investors, provide incubation facilities and easy access to resources 
                for product creation, and make them pitch-ready. We encourage individuals to engage in design thinking,
                planful ideation and foster the self-inculcation of new ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="otherlinks">
        <Link to="/aboutstartup" style={{ textDecoration: "none" }}>
          <button className="justsomebutton">About Startup</button>
        </Link>
        <Link to="/chat" style={{ textDecoration: "none" }}>
          <button className="justsomebutton">Chat Feature</button>
        </Link> */}
      {/* <Link
          to="/entrepreneurshipkickstart"
          style={{ textDecoration: "none" }}
        >
          <button className="justsomebutton">Entrepreneurship Kickstart</button>
        </Link>
        <Link to="/iitdangelnetwork" style={{ textDecoration: "none" }}>
          <button className="justsomebutton">IITD Angel Network</button>
        </Link> */}
      {/* <Link to="/listofstartups" style={{ textDecoration: "none" }}>
          <button className="justsomebutton">List of Startups</button>
        </Link>
        <Link
          to="/mentors_startupsyoufollow"
          style={{ textDecoration: "none" }}
        >
          <button className="justsomebutton">Startups You Follow</button>
        </Link>
        <Link to="/notifications" style={{ textDecoration: "none" }}>
          <button className="justsomebutton">Notifications</button>
        </Link>
        <Link to="/settings" style={{ textDecoration: "none" }}>
          <button className="justsomebutton">Settings</button>
        </Link>
        <Link to="/settingsnew" style={{ textDecoration: "none" }}>
          <button className="justsomebutton">Settings New</button>
        </Link>
        <Link to="/sidenavigationbar" style={{ textDecoration: "none" }}>
          <button className="justsomebutton">Side Navigation Bar</button>
        </Link>
      </div>*/}
    </div>
  );
}

export default Body;
