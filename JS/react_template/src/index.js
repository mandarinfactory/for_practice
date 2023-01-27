import './asset/CSS/animation.css'
import './asset/CSS/bubble-particle.css'
import './asset/CSS/reset.css'
import './asset/CSS/style.css'
import './asset/CSS/cursor.css'
import './asset/CSS/scrollbar.css'
import './asset/CSS/header.css'
import './asset/CSS/common.css'
import './asset/CSS/visual.css'
import './asset/CSS/section1.css'
import './asset/CSS/section2.css'
import './asset/CSS/section3.css'
import './asset/CSS/section4.css'
import './asset/CSS/section5.css'
import './asset/CSS/section6.css'
import './asset/CSS/sticky.css'
import './asset/CSS/footer.css'
import './asset/CSS/flipBook.css'
import './asset/CSS/viewbox.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);