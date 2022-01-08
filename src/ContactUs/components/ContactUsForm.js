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
      <form className="contactusform" onSubmit={this.handleSubmit}>
        <div className="contactusformget-in-touch">Get in touch with us!</div>
        <div className="contactusformdetails">
          <div className="contactusformname">
            <label>Name</label>
            <br />
            <input
              type="text"
              value={this.state.name}
              placeholder="Your Name"
              onChange={this.handleNameChange}
            />
          </div>
          <div className="contactusformemail">
            <label className="contactusformlabel">Email</label>
            <br />
            <input
              className="contactusforminput"
              type="email"
              placeholder="Eg. example@email.com"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="contactusformmessage">
            <label>Message</label>
            <br />
            <textarea
              className="contactusformtextarea"
              placeholder="Your Message"
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
          </div>

          <div className="contactusformsubmit-button">
            <button type="submit" id="contactusformsubmitbutton">
              Send Message
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
