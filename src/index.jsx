import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './feature/homepage';
import Destination from './feature/destination';
import Crew from './feature/crew';
import Technology from './feature/technology';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}>
        {/* <Route index element={<Homepage />} />  */}
          
      </Route>
      <Route path="/home" element={<Homepage />}/>
      <Route path="/destination/:celestial" element={<Destination />}/>
      <Route path="/crew/:member" element={<Crew />}/>
      <Route path="/technology/:tech" element={<Technology/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
