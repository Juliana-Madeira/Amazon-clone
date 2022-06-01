import React, { useEffect } from 'react';
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from './firebase'

function App() {

  useEffect(() => {             //will only run once when the App component loads
    auth.onAuthStateChanged(authUser => {

      console.log('The user is >>> ', authUser);

      if(authUser){ 
        //the user just logged in 
      } else {
        //the user is logged out
      }
    })
  }, [])


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={<Checkout/>} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
