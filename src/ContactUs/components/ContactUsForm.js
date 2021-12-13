import React, { Component } from "react";
import "./ContactUsForm.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //to prevent the page from refreshing when submit button is clicked
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="get-in-touch">Get in touch with us!</div>
        <div className="details">
          <div className="name">
            <label>Name</label>
            <br />
            <input
              type="text"
              value={this.state.name}
              placeholder="Your Name"
              onChange={this.handleNameChange}
            />
          </div>
          <div className="email">
            <label>Email</label>
            <br />
            <input
              type="email"
              placeholder="Eg. example@email.com"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="message">
            <label>Message</label>
            <br />
            <textarea
              placeholder="Your Message"
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
          </div>

          <div className="submit-button">
            <button type="submit" id="submitbutton">
              Send Message
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
