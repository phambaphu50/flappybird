import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import configureStore from './store'

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
