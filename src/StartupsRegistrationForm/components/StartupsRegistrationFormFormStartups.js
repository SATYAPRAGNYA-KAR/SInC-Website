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
      <form
        className="startupregistrationformform"
        onSubmit={this.handleSubmit}
      >
        <div>
          <label className="startupregistrationformformlabel">Join as</label>
          <div className="startupregistrationformformjoin-as">
            <div className="startupregistrationformformbutton1">
              <button
                className="startupregistrationformformbutton"
                onClick={this.handleButton1Change}
              >
                Participant in Entrepreneurship Kickstart
              </button>
            </div>
            <div className="startupregistrationformformbutton2">
              <button
                className="startupregistrationformformbutton"
                onClick={this.handleButton2Change}
              >
                To seek help through IITD Angel Network
              </button>
            </div>
          </div>

          <div className="startupregistrationformformname">
            <label className="startupregistrationformformlabel">Name</label>
            <br />
            <input
              className="startupregistrationformforminput"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="startupregistrationformformbatch-contact">
            <div className="startupregistrationformformbatch">
              <label className="startupregistrationformformlabel">
                Batch of
              </label>
              <br />
              <input
                className="startupregistrationformforminput"
                type="text"
                value={this.state.batch}
                onChange={this.handleBatchChange}
              />
            </div>
            <div className="startupregistrationformformcontactnumber">
              <label className="startupregistrationformformlabel">
                Contact Number
              </label>
              <br />
              <input
                className="startupregistrationformforminput"
                type="tel"
                value={this.state.contactnumber}
                onChange={this.handleContactNumberChange}
              />
            </div>
          </div>
          <div className="startupregistrationformformemail">
            <label className="startupregistrationformformlabel">Email ID</label>
            <br />
            <input
              className="startupregistrationformforminput"
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
        </div>

        <div className="startupregistrationformformstartup-details-title">
          Details about the Start-Up
        </div>
        <div className="startupregistrationformformstartup-details">
          <div className="startupregistrationformformstartup-name">
            <label className="startupregistrationformformlabel">
              Name of the Start-Up
            </label>
            <br />
            <input
              className="startupregistrationformforminput"
              type="text"
              value={this.state.startupName}
              onChange={this.handleStartUpNameChange}
            />
          </div>
          <div className="startupregistrationformformnumber-of-founders">
            <label className="startupregistrationformformlabel">
              No. of founders from IITD
            </label>
            <br />
            <input
              className="startupregistrationformforminput"
              type="number"
              value={this.state.numberOfFounders}
              onChange={this.handleNumberOfFoundersChange}
            />
          </div>
        </div>

        <div className="startupregistrationformformis-registered">
          <label className="startupregistrationformformmain-label">
            Is your Start-Up registered?
          </label>

          <label className="startupregistrationformformyes-no-label">Yes</label>
          <input
            className="startupregistrationformforminput"
            type="radio"
            name="is-registered"
            value="yes"
            onChange={this.handleIsRegisteredChange}
          />

          <label className="startupregistrationformformyes-no-label">No</label>
          <input
            className="startupregistrationformforminput"
            type="radio"
            name="is-registered"
            value="yes"
            onChange={this.handleIsRegisteredChange}
          />
        </div>
        <div className="startupregistrationformformcurrent-stage">
          <div className="startupregistrationformformmain-label">
            <label className="startupregistrationformformmain-label">
              What is the current stage of your Start-Up?
            </label>
          </div>

          <div className="startupregistrationformformoptions">
            <label className="startupregistrationformformoptions-label">
              Market research
            </label>
            <input
              className="startupregistrationformforminput"
              type="radio"
              name="current-stage"
              value="Market stage"
              onChange={this.handleCurrentStageChange}
            />
          </div>

          <div className="startupregistrationformformoptions">
            <label className="startupregistrationformformoptions-label">
              Building MVP
            </label>
            <input
              className="startupregistrationformforminput"
              type="radio"
              name="current-stage"
              value="Building MVP"
              onChange={this.handleCurrentStageChange}
            />
          </div>

          <div className="startupregistrationformformoptions">
            <label className="startupregistrationformformoptions-label">
              Gaining Traction for MVP
            </label>
            <input
              className="startupregistrationformforminput"
              type="radio"
              name="current-stage"
              value="Gaining Traction for MVP"
              onChange={this.handleCurrentStageChange}
            />
          </div>

          <div className="startupregistrationformformoptions">
            <label className="startupregistrationformformoptions-label">
              Have Paying Users
            </label>
            <input
              className="startupregistrationformforminput"
              type="radio"
              name="current-stage"
              value="Have Paying Users"
              onChange={this.handleCurrentStageChange}
            />
          </div>

          <div className="startupregistrationformformoptions">
            <label className="startupregistrationformformoptions-label">
              Raised Funds
            </label>
            <input
              className="startupregistrationformforminput"
              type="radio"
              name="current-stage"
              value="Raised Funds"
              onChange={this.handleCurrentStageChange}
            />
          </div>

          <div className="startupregistrationformformoptions">
            <label className="startupregistrationformformoptions-label">
              Has total revenue {">"} INR 500,000
            </label>
            <input
              className="startupregistrationformforminput"
              type="radio"
              name="current-stage"
              value="Has total revenue > INR 500,000"
              onChange={this.handleCurrentStageChange}
            />
          </div>

          <div className="startupregistrationformformoptions">
            <label className="startupregistrationformformoptions-label">
              Full fleged Product
            </label>
            <input
              className="startupregistrationformforminput"
              type="radio"
              name="current-stage"
              value="Full fleged Product"
              onChange={this.handleCurrentStageChange}
            />
          </div>
        </div>

        <div className="startupregistrationformformquestions">
          <label className="startupregistrationformformlabel">
            Any questions to us?
          </label>
          <br />
          <textarea
            className="startupregistrationformformtextarea"
            value={this.state.questions}
            onChange={this.handleQuestionsChange}
          />
        </div>
        <div className="startupregistrationformformsubmit-button">
          <button className="startupregistrationformformbutton" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
