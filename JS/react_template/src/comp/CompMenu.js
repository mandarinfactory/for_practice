import React from 'react';
import { NavLink } from 'react-router-dom';

const CompMenu = () => {
  return (
    <ul>
      <li><NavLink to="/home">home</NavLink></li>
      <li><NavLink to="/about">about</NavLink></li>
      <li><NavLink to="/studio">studio</NavLink></li>
      <li><NavLink to="/plan">plan</NavLink></li>
      <li><NavLink to="/trainer">trainer</NavLink></li>
      <li><NavLink to="/contact">contact</NavLink></li>
    </ul>
  );
};

export default CompMenu;