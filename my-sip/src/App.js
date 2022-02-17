import React from 'react';
import './App.css';
import Nav from './Nav';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import First from './first';
import Sip from './sip';
import Result from './result';
import Side from './sidebar'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Side/>
    <Nav/>
    <Routes>
        <Route path="/" element={<First/>}>  </Route>
        <Route exact path="sip/*" element={<Sip/>}  > </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
