import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './NavStyles';

function Navbar() {
  const classes = useStyles();

  const [isActive, setActive] = useState('home');
  return (
    <div>
      <div className={classes.NavbarContainer}>
        <NavLink className={isActive === classes.home ? `${classes.navLinks} ${classes.active}` : classes.navLinks} onClick={() => setActive(classes.home)} to="/">Home</NavLink>
        <NavLink className={isActive === classes.form ? `${classes.navLinks} ${classes.active}` : classes.navLinks} onClick={() => setActive(classes.form)} to="/form">Add New User</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
