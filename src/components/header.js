import React from 'react';
import logo from '../img/logo.png';
import '../style.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg blue">
      <div className="container-fluid">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Header;