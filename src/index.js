import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import { PageWithHeader, Provider as BumbagProvider, css } from 'bumbag';

const theme = {
  global: {
    fontSize: 20,
    styles: {
      base: css`
        html,
        body {
          background-color: rgba(100, 46, 125, 1);
          color: white;
          font-family: Andale Mono, monospace;;
          font-weight: bolder;
        }

      #post{
        background-color: white;
        color: rgba(46, 120, 125, 0.81);
      }
      #history{
        text-align: center;
        color: black;
        background-color: rgba(46, 120, 125, 0.81);
        padding: 10px;
        border-radius: 20px;
      }
      `
    }
  }
}

ReactDOM.render(
  <BumbagProvider theme={theme}>
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
