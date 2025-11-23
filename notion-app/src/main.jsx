import React from "react";
import ReactDOM from "react-dom/client";
// thẳng trung gian của react và html
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// đây là file main.jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

