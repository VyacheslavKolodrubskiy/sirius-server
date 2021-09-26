import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/sirius-server'>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
