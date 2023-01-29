import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import 'https://fonts.googleapis.com/css?family=Roboto:400,500,700';

// import "./assets/bootstrap/css/bootstrap.min.css";
// import "./assets/css/magnific-popup.css";
// import "./assets/css/odometer-theme-default.css";
// import "./assets/font-awesome/css/fontawesome-all.min.css";

// import "./assets/css/owl.carousel.min.css";
import App from './App';
import './index.css';
import './magnific-popup.css';
import './odometer-theme-default.css';
import './owl.carousel.min.css';
import './bootstrap.min.css';
// import './fontawesome-all.min.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
