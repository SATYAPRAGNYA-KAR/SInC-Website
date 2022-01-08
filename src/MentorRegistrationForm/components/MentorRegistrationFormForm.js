import React, { Component } from "react";
import "./MentorRegistrationFormForm.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      phone: "",
      password: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form className="mentorregistrationformform" onSubmit={this.handleSubmit}>
        <div className="mentorregistrationformformemail">
          <label className="mentorregistrationformformlabel">Email</label>
          <br />
          <input
            className="mentorregistrationformforminput"
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="mentorregistrationformformusername">
          <label className="mentorregistrationformformlabel">Username</label>
          <br />
          <input
            className="mentorregistrationformforminput"
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div className="mentorregistrationformformphone">
          <label className="mentorregistrationformformlabel">Phone no.</label>
          <br />
          <input
            className="mentorregistrationformforminput"
            type="tel"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          />
        </div>
        <div className="mentorregistrationformformpassword">
          <label className="mentorregistrationformformlabel">Password</label>
          <br />
          <input
            className="mentorregistrationformforminput"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div className="mentorregistrationformformsubmit-button">
          <button className="mentorregistrationformformbutton" type="submit">
            Create Account
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
