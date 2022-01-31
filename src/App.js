import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeApp from "./Homepage/HomepageApp";
import MentorsStartUpsYouFollowApp from "./Mentors_StartUpsYouFollow/Mentors_StartUpsYouFollowApp";
import ChatApp from "./Chat_Feature/Chat_FeatureApp";
import NotificationsApp from "./Notifications/NotificationsApp";
import ContactUsApp from "./ContactUs/ContactUsApp";
import AngelNetworkInvestorApp from "./AngelNetworkInvestor/AngelNetworkInvestorApp";
import AngelNetworkMentorApp from "./AngelNetworkMentor/AngelNetworkMentorApp";
import AngelNetworkNmApp from "./AngelNetworkNm/AngelNetworkNmApp";
import IITDAngelNetworkApp from "./IITDAngelNetwork/IITDAngelNetworkApp";
import MentorRegistrationFormApp from "./MentorRegistrationForm/MentorRegistrationFormApp";
import RegistrationFormApp from "./RegistrationForm/RegistrationFormApp";
import StartupsRegistrationFormApp from "./StartupsRegistrationForm/StartupsRegistrationFormApp";
import FAQsApp from "./FAQs/FAQsApp";
import SettingsApp from "./Settings/SettingsApp";

import Home from "./SettingsNew/SettingsNewHome";
import PrivacyHome from "./SettingsNew/SettingsNewPrivacyHome";
import PasswordHome from "./SettingsNew/SettingsNewPasswordHome";
import DeleteHome from "./SettingsNew/SettingsNewDeleteHome";
import FriendHome from "./SettingsNew/SettingsNewFriendHome";
import HistoryHome from "./SettingsNew/SettingsNewHistoryHome";
import InfoHome from "./SettingsNew/SettingsNewInfoHome";

import SideNavigationBarApp from "./SideNavigationBar/SideNavigationBarApp";

import Summary from "./AboutStartup/AboutStartupSummary";
import Team from "./AboutStartup/AboutStartupTeam";
import Financials from "./AboutStartup/AboutStartupFinancials";
import Business from "./AboutStartup/AboutStartupBusiness";
import Requirements from "./AboutStartup/AboutStartupRequirements";

import ListOfStartupsApp from "./ListOfStartups/ListOfStartupsApp";
import RegisterPageApp from "./RegisterPage/RegisterPageApp";
import StartupInsightApp from "./StartupInsight/StartupInsightApp";
import EntrepreneurshipKickstartApp from "./EntrepreneurshipKickstart/EntrepreneurshipKickstartApp";
import LoginApp from "./Login/LoginApp";

// import { useState, useEffect } from "react";
// import axios from "./axios";
//Remember to write './axios', else the axios module will be imported and the app will crash out

function App() {
  // const [people, setPeople] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const req = await axios.get("/");

  //     setPeople(req.data);
  //     return req;
  //   }

  //   fetchData();
  // }, []);
  //An empty array is necessary here so that when the page loads, the function is called once and not more
  //useEffect is a hook and needs to be imported from React

  useEffect(() => {
    document.title = "SInC Site";
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/listofstartups" element={<ListOfStartupsApp />} />

          <Route path="/aboutstartup" element={<Summary />} />
          <Route path="/aboutstartup/Team" element={<Team />} />
          <Route path="/aboutstartup/Financials" element={<Financials />} />
          <Route path="/aboutstartup/Business" element={<Business />} />
          <Route path="/aboutstartup/Requirements" element={<Requirements />} />
          {/* Written elements={<>} instead of element={<>} and so rendering wasn't happening */}

          <Route
            path="/mentors_startupsyoufollow"
            element={<MentorsStartUpsYouFollowApp />}
          />
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/notifications" element={<NotificationsApp />} />
          <Route path="/contactus" element={<ContactUsApp />} />
          <Route
            path="/angelnetworkinvestor"
            element={<AngelNetworkInvestorApp />}
          />
          <Route
            path="/angelnetworkmentor"
            element={<AngelNetworkMentorApp />}
          />
          <Route path="/angelnetworknm" element={<AngelNetworkNmApp />} />
          <Route path="/iitdangelnetwork" element={<IITDAngelNetworkApp />} />
          <Route
            path="/mentorregistrationform"
            element={<MentorRegistrationFormApp />}
          />
          <Route path="/registrationform" element={<RegistrationFormApp />} />
          <Route
            path="/startupsregistrationform"
            element={<StartupsRegistrationFormApp />}
          />
          <Route path="/faqs" element={<FAQsApp />} />
          <Route path="/settings" element={<SettingsApp />} />

          <Route path="/settingsnew" element={<Home />} />
          <Route path="/settingsnew/privacypath" element={<PrivacyHome />} />
          <Route path="/settingsnew/passwordpath" element={<PasswordHome />} />
          <Route path="/settingsnew/deletepath" element={<DeleteHome />} />
          <Route path="/settingsnew/friendpath" element={<FriendHome />} />
          <Route path="/settingsnew/historypath" element={<HistoryHome />} />
          <Route path="/settingsnew/infopath" element={<InfoHome />} />

          <Route path="/sidenavigationbar" element={<SideNavigationBarApp />} />
          <Route path="/registerpage" element={<RegisterPageApp />} />
          <Route path="/startupinsight" element={<StartupInsightApp />} />
          <Route
            path="/entrepreneurshipkickstart"
            element={<EntrepreneurshipKickstartApp />}
          />
          <Route path="/login" element={<LoginApp />} />
          <Route path="/" element={<HomeApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// axios is a package that'll make http requests super simple
