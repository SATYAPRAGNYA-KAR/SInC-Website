import "./ListOfStartupsApp.css";
import Header from "./ListOfStartupsHeader";
import SearchBar from "./ListOfStartupsSearchBar";
import Content from "./ListOfStartupsContent";
// import { Routes, Route } from "react-router-dom";

function ListOfStartupsApp() {
  return (
    <div className="App">
      <div className="App__Header">
        <Header />
      </div>
      <div className="App__SearchBar">
        <SearchBar />
      </div>

      <div className="App__Body">
        <div className="App__Content">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default ListOfStartupsApp;
