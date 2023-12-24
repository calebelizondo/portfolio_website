import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

// Navbar component
const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link to="/" className='nav-link'>Caleb Elizondo</Link>
        </li>
        <li className='nav-item'>
          <Link to="/resume" className='nav-link'>Resume</Link>
        </li>
        <li className='nav-item'>
          <Link to="/projects" className='nav-link'>Projects</Link>
        </li>
        <li className='nav-item'>
          <Link to="/contact" className='nav-link'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
