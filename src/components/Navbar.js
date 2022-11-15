import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './NavStyles';

function Navbar() {
  const [isActive, setActive] = useState('');
  const classes = useStyles();
  return (
    <div>
      <div className={classes.NavbarContainer}>
        <NavLink className={isActive === 'home' ? `${classes.navLinks} ${classes.active}` : classes.navLinks} onClick={() => setActive('home')} to="/">Home</NavLink>
        <NavLink className={isActive === 'form' ? `${classes.navLinks} ${classes.active}` : classes.navLinks} onClick={() => setActive('form')} to="/form">Add New User</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
