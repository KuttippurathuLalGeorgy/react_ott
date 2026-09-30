import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img
          className="logo"
          src="/img/icons8-logo-48.png"
          alt="Logo"
        />
      </div>

      <div className="nav-center">
        <Link to="/about">Home</Link>
        <Link to="/live">Live</Link>
        <Link to="/vod">VOD</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <div className="nav-right">
        <img
          className="avatarlogo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default NavBar;
 