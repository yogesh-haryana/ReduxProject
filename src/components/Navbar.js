import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css';

function Navbar() {
  const [isActive, setActive] = useState('');
  return (
    <div>
      <div className="NavbarContainer">
        <NavLink className={` ${isActive === 'home' ? 'navLinks active' : 'navLinks'}`} onClick={() => setActive('home')} to="/">Home</NavLink>
        <NavLink className={` ${isActive === 'form' ? 'navLinks active' : 'navLinks'}`} onClick={() => setActive('form')} to="/form">Add New User</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
