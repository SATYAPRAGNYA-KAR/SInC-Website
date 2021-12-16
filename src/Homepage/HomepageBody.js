import React from "react";
import "./HomepageBody.css";
import dn from "./Images/dn.png";
import about from "./Images/about.png";
import mission from "./Images/mission.png";
import vision from "./Images/vision.png";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="homebody">
      <div className="homebody-tag1">
        <h2>Entrepreneurship Challenge</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link to="registerpage" style={{ textDecoration: "none" }}>
          <button type="button" className="">
            Register Now
          </button>
        </Link>
      </div>
      <div className="homebody-tag2">
        <h2>Fundraiser</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link to="registerpage" style={{ textDecoration: "none" }}>
          <button type="button" className="">
            Contribute
          </button>
        </Link>
      </div>
      <div className="homebody-tag3">
        <div className="homebodyimg">
          <img src={dn} className="img" alt="" />
          <div className="homebodyimg1">Charvi</div>
          <div className="homebodyimg2">SInC Head</div>
        </div>
        <div className="homebodyimg-content">
          <div className="homebodyimg1">imperdiet dui accumsan sit amet</div>
          <div className="homebodyimg2">
            eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum
            neque egestas congue quisque egestas diam in
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
            eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum
            neque egestas congue quisque egestas diam in
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
              sit amet porttitor eget dolor morbi non arcu risus quis varius
              quam quisque id diam vel quam elementum pulvinar etiam non quam
              lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit
              amet consectetur adipiscing elit duis tristique sollicitudin nibh
              sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
              cursus vitae congue mauris rhoncus aenean vel elit scelerisque
              mauris pellentesque
            </p>
          </div>
        </div>
        <div className="homebody-tag5-card">
          <div className="homebody-tag5-card-content">
            <h1>Our Mission</h1>
            <br />
            <p>
              sit amet porttitor eget dolor morbi non arcu risus quis varius
              quam quisque id diam vel quam elementum pulvinar etiam non quam
              lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit
              amet consectetur adipiscing elit duis tristique sollicitudin nibh
              sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
              cursus vitae congue mauris rhoncus aenean vel elit scelerisque
              mauris pellentesque
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
              sit amet porttitor eget dolor morbi non arcu risus quis varius
              quam quisque id diam vel quam elementum pulvinar etiam non quam
              lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit
              amet consectetur adipiscing elit duis tristique sollicitudin nibh
              sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
              cursus vitae congue mauris rhoncus aenean vel elit scelerisque
              mauris pellentesque
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
