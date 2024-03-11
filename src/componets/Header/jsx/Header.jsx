import React from "react";
import "../css/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { SearchSharp } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

export default function Header() {
  return (
    <div className="header-container col-12">
      <div className="d-flex justify-content-center align-items-center ">
        <div className="imdb-logo d-flex">
          <span className="mx-2 my-1">IMDB</span>
        </div>
      </div>
      <div className="d-flex align-items-center menu-con mx-2">
        <MenuIcon color="warning" />
        <span className="menu-text mx-1">Menu</span>
      </div>
      <div className="header-search col-4 d-flex align-items-center py-1">
        <div className="d-flex ps-2 all-container">
          <span className="all-text">All</span>
          <ArrowDropDownIcon />
        </div>
        <div className="header-div-separator"></div>
        <div className="search-bar bg-white rounded w-100">
          <input type="text" placeholder="Search IMDb" />
        </div>
        <SearchSharp color="" className="me-2" />
      </div>
      <div className="menu-con mx-2">
        <span className="IMDbText">IMDb</span>
        <span className="proText">Pro</span>
      </div>
      <div className="div-separator"></div>
      <div className="d-flex align-items-center menu-con mx-2">
        <BookmarkAddIcon color="info" className="me-1" />
        <span className="menu-text">Watchlist</span>
      </div>
      <div className="menu-con ">
        <span className="menu-text">Sign In</span>
      </div>
      <div className=" d-flex align-items-center menu-con">
        <span className="menu-text">EN</span>
        <ArrowDropDownIcon color="warning" />
      </div>
    </div>
  );
}
