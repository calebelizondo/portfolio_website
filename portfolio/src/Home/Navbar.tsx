import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {

  return (
    <div className="navbar-container" id="navbar">
      <nav className='navbar-nav'>
        <ul>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#resume'>Resume</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
    </nav>
  

    </div>
    );
};

export default Navbar;
