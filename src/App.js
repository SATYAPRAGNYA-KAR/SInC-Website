import React from "react";
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
import SettingsNewApp from "./SettingsNew/SettingsNewApp";
import SideNavigationBarApp from "./SideNavigationBar/SideNavigationBarApp";
import AboutStartupApp from "./AboutStartup/AboutStartupApp";
import ListOfStartupsApp from "./ListOfStartups/ListOfStartupsApp";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/listofstartups" element={<ListOfStartupsApp />} />
          <Route path="/aboutstartup" element={<AboutStartupApp />} />

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
          <Route path="/settingsnew" element={<SettingsNewApp />} />
          <Route path="/sidenavigationbar" element={<SideNavigationBarApp />} />
          <Route path="/" element={<HomeApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
