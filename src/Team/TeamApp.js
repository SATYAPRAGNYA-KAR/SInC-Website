import "./TeamApp.css";
import Header from "./TeamHeader";
import Footer from "./TeamFooter";
import Content from "./TeamContent";

function TeamApp() {
  return (
    <div className="teamApp">
      <div className="teamApp_Header">
        <Header />
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
