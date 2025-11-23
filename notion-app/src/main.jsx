import React from 'react';
import ReactDOM from 'react-dom/client'; 
// thẳng trung gian của react và html
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRoute>
    <App />
    </BrowserRoute>
  </React.StrictMode>
);
