import "./AboutStartupApp.css";
import { Route, Routes } from "react-router-dom";
import Header from "./AboutStartupHeader";
import Summary from "./AboutStartupSummary";
import Team from "./AboutStartupTeam";
import Financials from "./AboutStartupFinancials";
// import Business from './Business'
// import Products from './Products'
// import Requirements from './Requirements'

function AboutStartupApp() {
  return (
    <div className="aboutstartupApp">
      <Header />
      <Routes>
        <Route path="/" elements={<Summary />} />
        <Route path="/Team" elements={<Team />} />
        <Route path="/Financials" elements={<Financials />} />
        {/* <Route path="/Business" elements={<Business />} />
        <Route path="/Products" elements={<Products />} />
        <Route path="/Requirements" elements={<Requirements />} /> */}
      </Routes>
    </div>
  );
}

export default AboutStartupApp;
