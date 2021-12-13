import "./Mentors_StartUpsYouFollowApp.css";
import Header from "./Mentors_StartUpsYouFollowHeader";
import SearchBar from "./Mentors_StartUpsYouFollowSearchBar";
import Content from "./Mentors_StartUpsYouFollowContent";
function MentorsStartUpsYouFollowApp() {
  return (
    <div className="App">
      <div className="App__Header">
        <Header />
      </div>
      <div className="App__SearchBar">
        <SearchBar />
      </div>
      <div className="App__Body">
        <Content />
      </div>
    </div>
  );
}

export default MentorsStartUpsYouFollowApp;
