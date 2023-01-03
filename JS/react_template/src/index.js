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
import './asset/CSS/screen/section1.css'
import './asset/CSS/screen/section2.css'
/* screen CSS rel ----------------------------------------------- */

/* adjustment CSS rel ------------------------------------------- */
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
); 