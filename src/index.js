import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import { Provider as BumbagProvider } from 'bumbag';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BumbagProvider>
  <React.StrictMode>

      <Home/>

  </React.StrictMode>
</BumbagProvider>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
