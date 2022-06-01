import React, { useEffect } from 'react';
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from './firebase'
import { useStateValue } from './components/StateProvider';

function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {             //will only run once when the App component loads
    auth.onAuthStateChanged(authUser => {

      console.log('The user is >>> ', authUser);

      if(authUser){ 
        //the user just logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          auth: null
        })
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
