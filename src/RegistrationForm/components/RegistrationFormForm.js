import React, { Component } from "react";
import "./RegistrationFormForm.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      batch: "",
      hostel: "",
      profile: "",
      connect: "",
      domain: "",
      questions: "",

      //These buttons are those in "Choose your Role(s)" section
      //clickedButton1 is true when button is clicked, and false otherwise. The other 4 buttons are similar to clickedButton1.
      clickedButton1: false,
      clickedButton2: false,
      clickedButton3: false,
      clickedButton4: false,
      clickedButton5: false,
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleBatchChange = (event) => {
    this.setState({
      batch: event.target.value,
    });
  };

  handleHostelChange = (event) => {
    this.setState({
      hostel: event.target.value,
    });
  };

  handleProfileChange = (event) => {
    this.setState({
      profile: event.target.value,
    });
  };

  handleConnectChange = (event) => {
    this.setState({
      connect: event.target.value,
    });
  };

  handleDomainChange = (event) => {
    this.setState({
      domain: event.target.value,
    });
  };

  handleQuestionsChange = (event) => {
    this.setState({
      questions: event.target.value,
    });
  };

  handleButton1Change = () => {
    const currentStatus = this.state.clickedButton1;
    this.setState(
      {
        clickedButton1: !currentStatus,
      },
      () => {
        console.log("Button 1 is clicked");
      }
    );
  };

  handleButton2Change = () => {
    const currentStatus = this.state.clickedButton2;
    this.setState({
      clickedButton2: !currentStatus,
    });
  };

  handleButton3Change = () => {
    const currentStatus = this.state.clickedButton3;
    this.setState({
      clickedButton3: !currentStatus,
    });
  };

  handleButton4Change = () => {
    const currentStatus = this.state.clickedButton4;
    this.setState({
      clickedButton4: !currentStatus,
    });
  };

  handleButton5Change = () => {
    const currentStatus = this.state.clickedButton5;
    this.setState({
      clickedButton5: !currentStatus,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //to prevent the page from refreshing when submit button is clicked
  };

  render() {
    return (
      <form className="registrationformform" onSubmit={this.handleSubmit}>
        <div>
          <label className="registrationformformlabel">
            Choose your Role(s)
          </label>
          <div className="registrationformformchoose-your-roles-buttons">
            <div
              className="registrationformformbutton"
              id="registrationformformbutton-1"
            >
              <button
                className="registrationformformbuttonbutton"
                id={this.state.clickedButton1.toString()}
                onClick={this.handleButton1Change}
              >
                Angel Investor
              </button>
            </div>
            <div
              className="registrationformformbutton"
              id="registrationformformbutton-2"
            >
              <button
                className="registrationformformbuttonbutton"
                id={this.state.clickedButton2.toString()}
                onClick={this.handleButton2Change}
              >
                Mentor in Entrepreneurship Kickstart
              </button>
            </div>
            <div
              className="registrationformformbutton"
              id="registrationformformbutton-3"
            >
              <button
                className="registrationformformbuttonbutton"
                id={this.state.clickedButton3.toString()}
                onClick={this.handleButton3Change}
              >
                Mentor to IITD Startups in general
              </button>
            </div>
            <div
              className="registrationformformbutton"
              id="registrationformformbutton-4"
            >
              <button
                className="registrationformformbuttonbutton"
                id={this.state.clickedButton4.toString()}
                onClick={this.handleButton4Change}
              >
                Official Partner to Entrepreneurship Kickstart
              </button>
            </div>
            <div
              className="registrationformformbutton"
              id="registrationformformbutton-5"
            >
              <button
                className="registrationformformbuttonbutton"
                id={this.state.clickedButton5.toString()}
                onClick={this.handleButton5Change}
              >
                Donor to Nurturing Funds in Entrepreneurship Kickstart
              </button>
            </div>
          </div>
        </div>
        <div className="registrationformformdetails">
          <div className="registrationformformname">
            <label className="registrationformformlabel">Name</label>
            <br />
            <input
              className="registrationformforminput"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="registrationformformbatch">
            <label className="registrationformformlabel">Batch of</label>
            <br />
            <input
              className="registrationformforminput"
              type="text"
              value={this.state.batch}
              onChange={this.handleBatchChange}
            />
          </div>
          <div className="registrationformformhostel">
            <label className="registrationformformlabel">Hostel</label>
            <br />
            <input
              className="registrationformforminput"
              type="text"
              value={this.state.hostel}
              onChange={this.handleHostelChange}
            />
          </div>
          <div className="registrationformformprofile">
            <label className="registrationformformlabel">
              Your Profile (LinkedIn Profile Link / Website link , etc. )
            </label>
            <br />
            <input
              className="registrationformforminput"
              type="url"
              value={this.state.profile}
              onChange={this.handleProfileChange}
            />
          </div>
          <div className="registrationformformconnect">
            <label className="registrationformformlabel">
              How can SInC connect with you? (Mail Id / Contact Number /
              LinkedIn message). Please mention the details about the chosen
              mode
            </label>
            <br />
            <textarea
              className="registrationformformtextarea"
              value={this.state.connect}
              onChange={this.handleConnectChange}
            />
          </div>
          <div className="registrationformformdomain">
            <label className="registrationformformlabel">
              Domain of interest (If more than one, separate by)
            </label>
            <br />
            <textarea
              className="registrationformformtextarea"
              value={this.state.domain}
              onChange={this.handleDomainChange}
            />
          </div>
          <div className="registrationformformquestions">
            <label className="registrationformformlabel">
              Any questions to us?
            </label>
            <br />
            <textarea
              className="registrationformformtextarea"
              value={this.state.questions}
              onChange={this.handleQuestionsChange}
            />
          </div>
          <div className="registrationformformsubmit-button">
            <button
              className="registrationformformbuttonbutton"
              type="submit"
              id="submitbutton"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
