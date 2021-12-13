import "./AngelNetworkInvestorApp.css";
import Header from "./AngelNetworkInvestorHeader";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";

function AngelNetworkInvestorApp() {
  return (
    <div className="App">
      <Header />
      <div className="buttons">
        <div className="button1">
          <button>Mentors</button>
        </div>
        <div className="button2">
          <button>What is in it for you</button>
        </div>
        <div className="button3">
          <button>Nurturing Funds</button>
        </div>
      </div>
      <div className="underline">
        <div className="bold"></div>
        <div className="thin"></div>
      </div>

      <div className="container">
        <div className="section" id="section1">
          <div className="text" id="text1">
            {/* <div className="heading" id="heading1">
              What role will these funds play?
            </div> */}
            <div className="box" id="box1">
              Associating with us means getting an early access to the upcoming
              startups and ideas that are being born out of your alma mater. An
              institute of Eminence which boasts of producing the highest number
              of unicorns amongst any other institute in India and many other
              laurels, thanks to the legacy of you guys
            </div>
          </div>
          <div className="image" id="image1">
            <img src={img1} alt="" />
          </div>
        </div>

        <div className="section" id="section2">
          <div className="text" id="text2">
            {/* <div className="heading" id="heading2">
              Do startups really need these funds?
            </div> */}
            <div className="box" id="box2">
              This is an Institute level program being done in partnership with
              FITT, and it comes with a lot of validation. Associating with us
              directly means associating with the institute and being right
              there on the social media handles and other public activities
              related to this. We will duly recognise your contribution!
            </div>
          </div>
          <div className="image" id="image2">
            <img src={img2} alt="" />
          </div>
        </div>

        <div className="section" id="section3">
          <div className="text" id="text3">
            {/* <div className="heading" id="heading3">
              What do we require?
            </div> */}
            <div className="box" id="box3">
              By monitoring the progress of startups from closed quarters, you
              can be sure of the potential of the team. At early-stage
              investments this is one of the crucial aspects about any venture
              and this initiative will help you a lot in the decision making if
              your interests gets aligned with any of the startups
            </div>
          </div>
          <div className="image" id="image3">
            <img src={img3} alt="" />
          </div>
        </div>

        <div className="section" id="section4">
          <div className="text" id="text4">
            {/* <div className="heading" id="heading4">
              What is in it for you?
            </div> */}
            <div className="box" id="box4">
              What sort of engagement the contributors want to have into this
              program is typically up to them. We will be more than happy to
              engage.For people contributing significant amount of funds, we are
              open to discuss other ways of better engagement. What sort of
              engagement the contributors want to have into this program is
              typically up to them. We will be more than happy to engage.For
              people contributing significant amount of funds, we are open to
              discuss other ways of better engagement.
            </div>
          </div>
          <div className="image" id="image4">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AngelNetworkInvestorApp;
