// React: core package
// ReactaDOM: for render
import React from 'react';
import ReactDOM from 'react-dom/client';
// stylesheet
import './index.css';
// import root component from app.js
import App from './App';


//render root component to a node with id names "root" in html file
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //strictMode need to be removed since it will affect the timing of execution of useEffect
  //it will execute every useEffect twice since it need one more execution to check strictMode.
    <App />
);

