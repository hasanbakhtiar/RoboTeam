import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/style.scss';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

