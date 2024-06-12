import React from "react";
import "./TopBar.css"; // We'll define the CSS for the top bar here
import profilePic from "../assets/avatar-1.png"; // replace with actual path to profile picture
// import { HiViewGridAdd } from "react-icons/hi";

const TopBar = ({ isOpen, handleToggle }) => {
  return (
    <div className="top-bar">
      <div className="top-bar-search-container">
        <div
          className={`hambuger d-xl-none d-lg-flex ${isOpen ? "open" : ""}`}
          onClick={handleToggle}
        >
          <i
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            className="fa-solid fa-bars"
          ></i>
        </div>
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" />
          <span className="shortcut">⌘K</span>
        </div>
      </div>
      <div className="icons-container">
        <i className="fa-solid fa-language"></i>
        <i className="fa-regular fa-sun"></i>
        <i className="fa-solid fa-boxes-stacked"></i>
        <i className="fa-solid fa-bell"></i>
        <div className="profile-container">
          <img src={profilePic} alt="" className="profile-pic" />
          <span className="status-dot"></span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
