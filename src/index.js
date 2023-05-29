import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/jquery/dist/jquery"
// import "../node_modules/bootstrap/dist/js/bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./css/animate.css";
import "./css/custom.css";
import "../src/fonts.googleapis.com/css2.css"
import "../src/fonts.googleapis.com/icon.css"
import "./fonts.googleapis.com/icon.css"

import { BrowserRouter } from 'react-router-dom';
// import AdminDash from './kuberr/employe/kuber/App';


import { MainComponent } from './kuberr/employe/Mainpage/Main';
import Signform from './kuberr/employe/kuber/author/Signform';















const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <DashboardClient/> */}
      <MainComponent />
      {/* <Signform/> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
