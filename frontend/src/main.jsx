import React from 'react';

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextWrapper from './context/ContextWrapper';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <ContextWrapper>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ContextWrapper>

);
