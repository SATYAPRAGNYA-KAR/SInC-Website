import React from "react";
import "./Mentors_StartUpsYouFollowContent.css";
import Infocard from "./Mentors_StartUpsYouFollowInfocard";

class Contact extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://shivamjain123.pythonanywhere.com/api/startup-api")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    var { dataisLoaded, items } = this.state;

    if (!dataisLoaded) {
      console.log("Loading ...");
    }

    return (
      <div className="mentorsstartupsyoufollowContent">
        {items.map((item) => (
          <Infocard
            key={item.startup}
            email={item.email}
            startup_name={item.startup_name}
            vision={item.vision}
            type={item.type}
            description={item.description}
            short_description={item.short_description}
          />
        ))}
      </div>
    );
  }
}
export default Content;
