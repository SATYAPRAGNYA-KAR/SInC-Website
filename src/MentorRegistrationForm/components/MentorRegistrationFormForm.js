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
      <form onSubmit={this.handleSubmit}>
        <div className="email">
          <label>Email</label>
          <br />
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="username">
          <label>Username</label>
          <br />
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div className="phone">
          <label>Phone no.</label>
          <br />
          <input
            type="tel"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          />
        </div>
        <div className="password">
          <label>Password</label>
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div className="submit-button">
          <button type="submit">Create Account</button>
        </div>
      </form>
    );
  }
}

export default Form;
