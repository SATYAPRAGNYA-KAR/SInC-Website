import React from "react";
import "./Mentors_StartUpsYouFollowSearchBar.css";
import { BiSearchAlt } from "react-icons/bi";
function SearchBar() {
  return (
    <div className="mentorsstartupsyoufollowSearchBar">
      <div className="mentorsstartupsyoufollowSearchIcon">
        <div>
          <BiSearchAlt size={26} />
        </div>
      </div>
      <input type="text" className="" width="80px" height="40px"></input>
      <div className="mentorsstartupsyoufollowSearch">
        {" "}
        <div>Search </div>
      </div>
    </div>
  );
}

export default SearchBar;
