import './asset/css/animation.css'
import './asset/css/reset.css'
import './asset/css/style.css'
import './asset/css/cursor.css'
import './asset/css/header.css'
import './asset/css/common.css'
import './asset/css/visual.css'
import './asset/css/section1.css'
import './asset/css/section2.css'
import './asset/css/section3.css'
import './asset/css/section4.css'
import './asset/css/section5.css'
import './asset/css/section6.css'
import './asset/css/footer.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);