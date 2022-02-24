import "./ListOfStartupsApp.css";
import Header from "./ListOfStartupsHeader";
import SearchBar from "./ListOfStartupsSearchBar";
import Content from "./ListOfStartupsContent";
// import { Routes, Route } from "react-router-dom";
import Footer from "./ListOfStartupsFooter";

function ListOfStartupsApp() {
  return (
    <div className="listofstartupsApp">
      <div className="listofstartupsApp__Header">
        <Header />
      </div>
      <div className="listofstartupsApp__SearchBar">
        <SearchBar />
      </div>

      <div className="listofstartupsApp__Body">
        <div className="listofstartupsApp__Content">
          <Content />
        </div>
      </div>
      <div className="listofstartupsApp__Footer">
        <Footer />
      </div>
    </div>
  );
}

export default ListOfStartupsApp;

// const [data_on_badges, setDataOnBadges] = useState(
//   [
//     {
//       "name": "goodwork"
//       , "date_earned": "2021-07-19"
//       , "isEarned": false
//     }
//     , {
//       "name": "good"
//       , "date_earned": "2021-07-19"
//       , "isEarned": false
//     }
//     , {
//       "name": "good"
//       , "date_earned": "2021-07-19"
//       , "isEarned": false
//     }
//   ]