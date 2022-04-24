import "./TeamApp.css";
import Header from "./TeamHeader";
import Footer from "../Login/LoginFooter";
import Content from "./TeamContent";
import Topbar from "./Navbar";

function TeamApp() {
  return (
    <div className="teamApp">
      <div className="teamApp_Header">
        <Topbar />
      </div>
      <div className="teamApp_Content">
        <Content />
      </div>
      <div className="teamApp_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default TeamApp;
