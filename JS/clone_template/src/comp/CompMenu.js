import React from 'react';
import { NavLink } from 'react-router-dom';

const CompMenu = () => {
  return (
    <ul>
      <li><NavLink className="link-btn0" data-target="0" to="/home">home</NavLink></li>
      <li><NavLink className="link-btn1" data-target="1" to="/about">about</NavLink></li>
      <li><NavLink className="link-btn2" data-target="2" to="/feature">feature</NavLink></li>
      <li><NavLink className="link-btn3" data-target="3" to="/studio">studio</NavLink></li>
      <li><NavLink className="link-btn4" data-target="4" to="/plan">plan</NavLink></li>
      <li><NavLink className="link-btn5" data-target="5" to="/trainer">trainer</NavLink></li>
      <li><NavLink className="link-btn6" data-target="6" to="/contact">contact</NavLink></li>
    </ul>
  );
};

export default CompMenu;