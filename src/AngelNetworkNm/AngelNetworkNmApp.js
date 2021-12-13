import "./AngelNetworkNmApp.css";
import Header from "./AngelNetworkNmHeader";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";

function AngelNetworkNmApp() {
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
            <div className="heading" id="heading1">
              What role will these funds play?
            </div>
            <div className="box" id="box1">
              Some of the student startups at initial stages require little
              amount of capital to take things off-ground. This becomes a
              barrier and at times a significant one for some of them which can
              refrain their startups from going places. We don’t want this to be
              a cause and hence are looking to build a fund of INR 15 Lakhs that
              can be used to nurture student startups.
            </div>
          </div>
          <div className="image" id="image1">
            <img src={img1} alt="" />
          </div>
        </div>

        <div className="section" id="section2">
          <div className="text" id="text2">
            <div className="heading" id="heading2">
              Do startups really need these funds?
            </div>
            <div className="box" id="box2">
              Not every student startup will have this requirement but for those
              who do, this should not pose a challenge or seen as a limitation.
              Some of the ways through which these funds can be useful for
              startups are :<br />
              To onboard some interns that can help the founder assist with a
              skillset that he/she might not have
              <br />
              For initial MVP development both from technical and physical point
              of view
              <br />
              For gaining initial traction onto the product or a service and
              that this could really help them go through
              <br />
              These are specific to the domain the startups are operating in and
              hence we want to have room to accommodate those
            </div>
          </div>
          <div className="image" id="image2">
            <img src={img2} alt="" />
          </div>
        </div>

        <div className="section" id="section3">
          <div className="text" id="text3">
            <div className="heading" id="heading3">
              What do we require?
            </div>
            <div className="box" id="box3">
              We are looking to partner with alumni, individually or through
              their organizations through CSR funds/Official Partner , who
              believe in our mission of changing the way entrepreneurship is
              being looked at in the campus. We are inviting contribution with a
              ticket size of minimum 50,000/- and we are looking to build a fund
              of 15 Lakhs to be used in nurturing.
            </div>
          </div>
          <div className="image" id="image3">
            <img src={img3} alt="" />
          </div>
        </div>

        <div className="section" id="section4">
          <div className="text" id="text4">
            <div className="heading" id="heading4">
              What is in it for you?
            </div>
            <div className="box" id="box4">
              Associating with us means getting an early access to the upcoming
              startups and ideas that are being born out of your alma mater. An
              institute of Eminence which boasts of producing the highest number
              of unicorns amongst any other institute in India and many other
              laurels, thanks to the legacy of you guys.
              <br />
              <br />
              This is an Institute level program being done in partnership with
              FITT, and it comes with a lot of validation. Associating with us
              directly means associating with the institute and being right
              there on the social media handles and other public activities
              related to this. We will duly recognise your contribution!
            </div>
          </div>
          <div className="image" id="image4">
            <img src={img4} alt="" />
          </div>
        </div>

        <div className="section" id="section5">
          <div className="text" id="text5"></div>
          <div className="box" id="box5">
            By monitoring the progress of startups from closed quarters, you can
            be sure of the potential of the team. At early-stage investments
            this is one of the crucial aspects about any venture and this
            initiative will help you a lot in the decision making if your
            interests gets aligned with any of the startups.
            <br />
            <br />
            What sort of engagement the contributors want to have into this
            program is typically up to them. We will be more than happy to
            engage.For people contributing significant amount of funds, we are
            open to discuss other ways of better engagement.
          </div>
          <div className="image" id="image5">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AngelNetworkNmApp;
