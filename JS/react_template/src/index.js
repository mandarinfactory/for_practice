import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/* React Hooks rel ---------------------------------------------- */
import './asset/CSS/reset.css'
import './asset/CSS/style.css'
import './asset/CSS/common.css'
/* root CSS rel ------------------------------------------------- */
import './asset/CSS/screen/cursor.css'
import './asset/CSS/screen/header.css'
import './asset/CSS/screen/visual.css'
/* screen CSS rel ----------------------------------------------- */
import './asset/CSS/screen/sections/section1.css'
import './asset/CSS/screen/sections/section2.css'
import './asset/CSS/screen/sections/section3.css'
import './asset/CSS/screen/sections/section4.css'
import './asset/CSS/screen/sections/section5.css'
import './asset/CSS/screen/sections/section6.css'
/* screen/sections CSS rel ----------------------------------------------- */

/* adjustment CSS rel ------------------------------------------- */
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
); 