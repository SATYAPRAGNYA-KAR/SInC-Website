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
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Choose your Role(s)</label>
          <div className="choose-your-roles-buttons">
            <div className="button" id="button-1">
              <button
                id={this.state.clickedButton1.toString()}
                onClick={this.handleButton1Change}
              >
                Angel Investor
              </button>
            </div>
            <div className="button" id="button-2">
              <button
                id={this.state.clickedButton2.toString()}
                onClick={this.handleButton2Change}
              >
                Mentor in Entrepreneurship Kickstart
              </button>
            </div>
            <div className="button" id="button-3">
              <button
                id={this.state.clickedButton3.toString()}
                onClick={this.handleButton3Change}
              >
                Mentor to IITD Startups in general
              </button>
            </div>
            <div className="button" id="button-4">
              <button
                id={this.state.clickedButton4.toString()}
                onClick={this.handleButton4Change}
              >
                Official Partner to Entrepreneurship Kickstart
              </button>
            </div>
            <div className="button" id="button-5">
              <button
                id={this.state.clickedButton5.toString()}
                onClick={this.handleButton5Change}
              >
                Donor to Nurturing Funds in Entrepreneurship Kickstart
              </button>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="name">
            <label>Name</label>
            <br />
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="batch">
            <label>Batch of</label>
            <br />
            <input
              type="text"
              value={this.state.batch}
              onChange={this.handleBatchChange}
            />
          </div>
          <div className="hostel">
            <label>Hostel</label>
            <br />
            <input
              type="text"
              value={this.state.hostel}
              onChange={this.handleHostelChange}
            />
          </div>
          <div className="profile">
            <label>
              Your Profile (LinkedIn Profile Link / Website link , etc. )
            </label>
            <br />
            <input
              type="url"
              value={this.state.profile}
              onChange={this.handleProfileChange}
            />
          </div>
          <div className="connect">
            <label>
              How can SInC connect with you? (Mail Id / Contact Number /
              LinkedIn message). Please mention the details about the chosen
              mode
            </label>
            <br />
            <textarea
              value={this.state.connect}
              onChange={this.handleConnectChange}
            />
          </div>
          <div className="domain">
            <label>Domain of interest (If more than one, separate by)</label>
            <br />
            <textarea
              value={this.state.domain}
              onChange={this.handleDomainChange}
            />
          </div>
          <div className="questions">
            <label>Any questions to us?</label>
            <br />
            <textarea
              value={this.state.questions}
              onChange={this.handleQuestionsChange}
            />
          </div>
          <div className="submit-button">
            <button type="submit" id="submitbutton">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
