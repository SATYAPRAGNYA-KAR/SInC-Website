import "./RegisterPageApp.css";
import Header from "./Navbar";
import Body from "./RegisterPageBody";
import Footer from "../Login/LoginFooter";

function RegisterPageApp() {
  return (
    <div className="registerpageApp">
      <Header />
      <div className="registerpage_body">
        <Body />
      </div>
      
      <div className="registerpage_footer">
        <Footer />
      </div>
      
    </div>
  );
}

export default RegisterPageApp;
