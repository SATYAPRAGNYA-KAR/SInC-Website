import "./Mentors_StartUpsYouFollowApp.css";
import Header from "./Mentors_StartUpsYouFollowHeader";
import SearchBar from "./Mentors_StartUpsYouFollowSearchBar";
import Content from "./Mentors_StartUpsYouFollowContent";
function MentorsStartUpsYouFollowApp() {
  return (
    <div className="mentorsstartupsyoufollowApp">
      <div className="mentorsstartupsyoufollowApp__Header">
        <Header />
      </div>
      <div className="mentorsstartupsyoufollowApp__SearchBar">
        <SearchBar />
      </div>
      <div className="mentorsstartupsyoufollowApp__Body">
        <Content />
      </div>
    </div>
  );
}

export default MentorsStartUpsYouFollowApp;
