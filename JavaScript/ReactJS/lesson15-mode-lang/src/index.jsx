import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/bootstrap.min.css'
import './assets/sass/style.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


