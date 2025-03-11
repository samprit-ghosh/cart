// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css"; // ✅ Make sure to import Tailwind styles

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css"; // ✅ Make sure to import Tailwind styles
import {Provider} from 'react-redux'
import store from '../../frontend/src/State/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<Provider store={store}>
<App />
</Provider>

 
  </BrowserRouter>
);
