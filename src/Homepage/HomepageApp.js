import React, { Component } from "react";
import "./HomepageApp.css";
// import Header from "./HomepageHeader";
import Body from './Body';
import Navbar from './Navbar';
import Header from "./HomeHeader";
// import Body from "./HomepageBody";
import Footer from "./HomeFooter";
import SideNavigationBarApp from "./SideNavigationBarApp"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import $ from 'jquery';

export default class HomeApp extends Component {

  // jQueryCode = () => {
  //   $('.homeAppDashboard').on('click', function(){
  //     $('.homeAppSideBar').addClass('active');
  //   });

  //   $('.sidenavigationbarclose').on('click', function () {
  //     $('.homeAppSideBar').removeClass('active');
  //   });
  // }

  // componentDidMount(){
  //   this.jQueryCode();
  // }

  render() {
    return (
      <div className="homeApp">
        {/* <Header /> */}
        {/* <div className="homeAppDashboard">
          <MenuRoundedIcon sx={{ fontSize: 60 }} />
        </div> */}
        {/* <div className="homeAppSideBar">
          <SideNavigationBarApp />
        </div> */}
        <div className="homeAppPage">
          <Navbar />
          <Body/>
          <Footer />
        </div>
      </div>
    );
  }
}
// react-router renders a new component when the URL changes instead of hard refreshing the page. This has a nasty side effect that it remembers your current scroll position and doesn't automatically scroll back to the top of the page when the page changes.
