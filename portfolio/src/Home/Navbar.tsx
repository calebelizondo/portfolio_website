import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {

  return (
    <nav>
      <ul>
        <a href='#section1'>Go to section 1</a>
      </ul>
    </nav>
  );
};

export default Navbar;
