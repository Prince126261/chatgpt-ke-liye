import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="Logo.png" alt="logo" />
      </div>
      <div className="components">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="btns">
        <button className="one" id="sign">Sign in</button>
        <button className="one" id="start">Get started</button>
      </div>
      <FontAwesomeIcon icon={faBars} className="menu-icon" />
    </div>
  );
}

export default Header;