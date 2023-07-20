import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="navbar-profile-info">
        <img className="navbar-avatar" src="avatar.jpg" alt="" />
        <div>
          <b>John Nelson</b>
          <span>Life - war</span>
        </div>
      </div>
      <div className="navbar__links">
        <Link to={'/settings'}><img src="icon-settings.png" alt="" width={20} /> Settings</Link>
        <Link to={'/favorites'}><img src="icon-favorite.png" alt="" width={20} /> Favorites</Link>
        <div>
          <span>Theme</span>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
