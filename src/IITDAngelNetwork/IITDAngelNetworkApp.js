import "./IITDAngelNetworkApp.css";
import businessDeal from "./businessDeal.png";
import rocket from "./rocket.png";
import invertedCommas from "./invertedCommas.png";
import Header from "./IITDAngelNetworkHeader";

function IITDAngelNetworkApp() {
  return (
    <div className="App">
      <Header />
      <div className="main-heading">IITD Angel Network</div>
      <div className="boxes">
        <div className="box1">
          <div className="box-text">
            <div className="box-text-heading">Introduction</div>
            <div className="box-text-content">
              An initiative to connect the IITD Startup Community (Mentors,
              Investors and startups) and bridge the gap between the ones
              seeking help and the ones willing to help.
            </div>
          </div>
          <div className="box1-image">
            <img src={businessDeal} alt="Two people shaking hands" />
          </div>
        </div>
        <div className="box2">
          <div className="box-text">
            <div className="box-text-heading">
              Relation with Entrepreneurship Kickstart
            </div>
            <div className="box-text-content">
              Alumni in the IITD Angel Network interested in helping startups at
              nascent stages can help us to implement the initiative by being a
              mentor, or donating to nurturing funds. Mentioned below is a
              detailed description.
            </div>
          </div>
          <div className="box2-image">
            <img src={rocket} alt="Two people shaking hands" />
          </div>
        </div>
      </div>
      <div className="inviting-our-alumni">
        Inviting our alumni to be a part of of the initiative that is going to
        change the way entrepreneurship is looked at in the campus.
      </div>

      <div className="line-under-quotes">
        <img
          className="opening-quotes"
          src={invertedCommas}
          alt="beginning inverted commas"
        />
        <div className="the-line">
          IT’S NOT ABOUT IDEAS,
          <br />
          IT’S ABOUT MAKING
          <br />
          IDEAS HAPPEN.
        </div>
        <img
          className="closing-quotes"
          src={invertedCommas}
          alt="ending inverted commas"
        />
      </div>
    </div>
  );
}

export default IITDAngelNetworkApp;
