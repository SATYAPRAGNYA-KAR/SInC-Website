import "./StartupInsightApp.css";
import blackborder from "./Images/blackborder.png";
import symbol from "./Images/symbol.png";
import Header from "./StartupInsightHeader";
// import Footer from './Footer';

function StartupInsightApp() {
  return (
    <div className="startupinsightApp">
      <Header />
      <img
        id="startupinsightblackborder"
        src={blackborder}
        alt="just some design"
      ></img>

      <div className="startupinsighttop-heading">Lorem</div>
      <div className="startupinsightbottom-heading">Consecteur</div>

      <div className="startupinsightright-box">
        <div className="startupinsightright-box-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In eu mi
          bibendum neque egestas. Tincidunt nunc pulvinar sapien et.or sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. In eu mi bibendum neque egestas.
          Tincidunt nunc pulvinar sapien et. Neque viverra justo nec ultrices
          dui
        </div>

        <div className="startupinsightright-box-register">
          <button onClick={() => window.open("", "_blank")}>Register</button>
        </div>
      </div>

      <div className="startupinsightbottom">
        <div className="startupinsightbox1">
          <div className="startupinsightbox-heading">YONO</div>
          <div className="startupinsightbox-symbol">
            <img src={symbol} alt="logo"></img>
          </div>
          <div className="startupinsightbox-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="startupinsightbox2">
          <div className="startupinsightbox-heading">YONO</div>
          <div className="startupinsightbox-symbol">
            <img src={symbol} alt="logo"></img>
          </div>
          <div className="startupinsightbox-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="startupinsightbox3">
          <div className="startupinsightbox-heading">YONO</div>
          <div className="startupinsightbox-symbol">
            <img src={symbol} alt="logo"></img>
          </div>
          <div className="startupinsightbox-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="startupinsightbox4">
          <div className="startupinsightbox-heading">YONO</div>
          <div className="startupinsightbox-symbol">
            <img src={symbol} alt="logo"></img>
          </div>
          <div className="startupinsightbox-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="startupinsightbox5">
          <div className="startupinsightbox-heading">YONO</div>
          <div className="startupinsightbox-symbol">
            <img src={symbol} alt="logo"></img>
          </div>
          <div className="startupinsightbox-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="startupinsightbox6">
          <div className="startupinsightbox-heading">YONO</div>
          <div className="startupinsightbox-symbol">
            <img src={symbol} alt="logo"></img>
          </div>
          <div className="startupinsightbox-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="startupinsightbox7">
          <div className="startupinsightbox-heading">YONO</div>
          <div className="startupinsightbox-symbol">
            <img src={symbol} alt="logo"></img>
          </div>
          <div className="startupinsightbox-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="startupinsightbox8">
          <div className="startupinsightbox-heading">YONO</div>
          <div className="startupinsightbox-symbol">
            <img src={symbol} alt="logo"></img>
          </div>
          <div className="startupinsightbox-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="startupinsightbox9">
          <div className="startupinsightbox-heading">YONO</div>
          <div className="startupinsightbox-symbol">
            <img src={symbol} alt="logo"></img>
          </div>
          <div className="startupinsightbox-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
}

export default StartupInsightApp;
