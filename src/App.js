// import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./Components/Navbar";
import AllRoutes from "./routes/AllRoutes";
import {BrowserRouter, Route} from 'react-router-dom'

export default function App() {
  return (
    <div style={{textAlign: 'center'}}>
    <BrowserRouter>
       <Navbar />
       <AllRoutes/>
    </BrowserRouter>
    </div>
  );
}
