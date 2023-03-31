import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import A from "./App"
import Navbar from './Navbar'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='body'>
        <Navbar />
        <A />
    </div>
)
reportWebVitals();
