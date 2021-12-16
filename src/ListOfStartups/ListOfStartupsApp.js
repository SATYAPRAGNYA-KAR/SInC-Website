import "./ListOfStartupsApp.css";
import Header from "./ListOfStartupsHeader";
import SearchBar from "./ListOfStartupsSearchBar";
import Content from "./ListOfStartupsContent";
// import { Routes, Route } from "react-router-dom";

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
    </div>
  );
}

export default ListOfStartupsApp;
