import React from 'react';
import { NavLink } from 'react-router-dom';

const CompMenu = () => {
  return (
    <ul>
      <li><NavLink data-target="0" to="/home">home</NavLink></li>
      <li><NavLink data-target="1" to="/about">about</NavLink></li>
      <li><NavLink data-target="2" to="/feature">feature</NavLink></li>
      <li><NavLink data-target="3" to="/studio">studio</NavLink></li>
      <li><NavLink data-target="4" to="/plan">plan</NavLink></li>
      <li><NavLink data-target="5" to="/trainer">trainer</NavLink></li>
      <li><NavLink data-target="6" to="/contact">contact</NavLink></li>
    </ul>
  );
};

export default CompMenu;