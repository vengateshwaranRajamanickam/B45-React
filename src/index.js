import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import A from "../../day1/src/pricecart0";
import B from "./pricecart1";
import C from "./pricecart2";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className="row"><A/><B/><C/></div>
)

reportWebVitals();
