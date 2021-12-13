import React, { Component } from "react";
import "./StartupsRegistrationFormFormStartups.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      batch: "",
      contactnumber: "",
      email: "",
      startupName: "",
      numberOfFounders: "",
      questions: "",
      clickedButton1: false,
      clickedButton2: false,
      clickedButton3: false,
      clickedButton4: false,
      clickedButton5: false,
      isRegistered: "", //stores strings yes or no
      currentStage: "",
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

  handleContactNumberChange = (event) => {
    this.setState({
      contactnumber: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleStartUpNameChange = (event) => {
    this.setState({
      startupName: event.target.value,
    });
  };

  handleNumberOfFoundersChange = (event) => {
    this.setState({
      numberOfFounders: event.target.value,
    });
  };

  handleIsRegisteredChange = (event) => {
    this.setState({
      isRegistered: event.target.value,
    });
  };

  handleCurrentStageChange = (event) => {
    this.setState({
      currentStage: event.target.value,
    });
  };

  handleQuestionsChange = (event) => {
    this.setState({
      questions: event.target.value,
    });
  };

  handleButton1Change = () => {
    const currentStatus = this.state.clickedButton1;
    this.setState({
      clickedButton1: !currentStatus,
    });
  };

  handleButton2Change = () => {
    const currentStatus = this.state.clickedButton2;
    this.setState({
      clickedButton2: !currentStatus,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Join as</label>
          <div className="join-as">
            <div className="button1">
              <button onClick={this.handleButton1Change}>
                Participant in Entrepreneurship Kickstart
              </button>
            </div>
            <div className="button2">
              <button onClick={this.handleButton2Change}>
                To seek help through IITD Angel Network
              </button>
            </div>
          </div>

          <div className="name">
            <label>Name</label>
            <br />
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="batch-contact">
            <div className="batch">
              <label>Batch of</label>
              <br />
              <input
                type="text"
                value={this.state.batch}
                onChange={this.handleBatchChange}
              />
            </div>
            <div className="contactnumber">
              <label>Contact Number</label>
              <br />
              <input
                type="tel"
                value={this.state.contactnumber}
                onChange={this.handleContactNumberChange}
              />
            </div>
          </div>
          <div className="email">
            <label>Email ID</label>
            <br />
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
        </div>

        <div className="startup-details-title">Details about the Start-Up</div>
        <div className="startup-details">
          <div className="startup-name">
            <label>Name of the Start-Up</label>
            <br />
            <input
              type="text"
              value={this.state.startupName}
              onChange={this.handleStartUpNameChange}
            />
          </div>
          <div className="number-of-founders">
            <label>No. of founders from IITD</label>
            <br />
            <input
              type="number"
              value={this.state.numberOfFounders}
              onChange={this.handleNumberOfFoundersChange}
            />
          </div>
        </div>

        <div className="is-registered">
          <label className="main-label">Is your Start-Up registered?</label>

          <label className="yes-no-label">Yes</label>
          <input
            type="radio"
            name="is-registered"
            value="yes"
            onChange={this.handleIsRegisteredChange}
          />

          <label className="yes-no-label">No</label>
          <input
            type="radio"
            name="is-registered"
            value="yes"
            onChange={this.handleIsRegisteredChange}
          />
        </div>
        <div className="current-stage">
          <div className="main-label">
            <label className="main-label">
              What is the current stage of your Start-Up?
            </label>
          </div>

          <div className="options">
            <label className="options-label">Market research</label>
            <input
              type="radio"
              name="current-stage"
              value="Market stage"
              onChange={this.handleCurrentStageChange}
            />
          </div>

          <div className="options">
            <label className="options-label">Building MVP</label>
            <input
              type="radio"
              name="current-stage"
              value="Building MVP"
              onChange={this.handleCurrentStageChange}
            />
          </div>

          <div className="options">
            <label className="options-label">Gaining Traction for MVP</label>
            <input
              type="radio"
              name="current-stage"
              value="Gaining Traction for MVP"
              onChange={this.handleCurrentStageChange}
            />
          </div>

          <div className="options">
            <label className="options-label">Have Paying Users</label>
            <input
              type="radio"
              name="current-stage"
              value="Have Paying Users"
              onChange={this.handleCurrentStageChange}
            />
          </div>

          <div className="options">
            <label className="options-label">Raised Funds</label>
            <input
              type="radio"
              name="current-stage"
              value="Raised Funds"
              onChange={this.handleCurrentStageChange}
            />
          </div>

          <div className="options">
            <label className="options-label">
              Has total revenue {">"} INR 500,000
            </label>
            <input
              type="radio"
              name="current-stage"
              value="Has total revenue > INR 500,000"
              onChange={this.handleCurrentStageChange}
            />
          </div>

          <div className="options">
            <label className="options-label">Full fleged Product</label>
            <input
              type="radio"
              name="current-stage"
              value="Full fleged Product"
              onChange={this.handleCurrentStageChange}
            />
          </div>
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
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
