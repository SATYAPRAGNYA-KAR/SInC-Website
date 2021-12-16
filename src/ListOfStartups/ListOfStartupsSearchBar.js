import React from "react";
import "./ListOfStartupsSearchBar.css";
import { BiSearchAlt } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";

function SearchBar() {
  return (
    <div className="listofstartupsSearchBar">
      <div className="listofstartupsSearchBarFiFilter">
        <Link to="/">
          <FiFilter style={{ height: "25px", width: "25px" }} />
        </Link>
      </div>
      <div className="listofstartupsSearchBarSearchIcon">
        <div>
          <BiSearchAlt size={26} />
        </div>
      </div>
      <input type="text" className="" width="80px" height="40px"></input>
      <div className="listofstartupsSearchBarSearch">
        {" "}
        <div>Search </div>
      </div>
      {/* <div className={filter ? "SearchIcon-filter-active" : "SearchIcon"}>

        </div> */}
    </div>
  );
}

export default SearchBar;
