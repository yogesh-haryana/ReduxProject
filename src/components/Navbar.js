import React from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './NavStyles';

function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.NavbarContainer}>
        <NavLink activeClassName="active" className={classes.navLinks} to="/">Home</NavLink>
        <NavLink activeClassName="active" className={classes.navLinks} to="/form">Add New User</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
