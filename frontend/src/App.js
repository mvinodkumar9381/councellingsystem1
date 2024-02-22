import React from 'react'
import './App.css';
import Header from './components/Header';
import {Route,Routes} from 'react-router-dom';
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Councellor from "./components/Councellor";
import Visitor from "./components/Visitor";
import Appointment from "./components/Appointment";
import FetchRegistrations from "./components/FetchRegistrations";
import Success from './components/Success';



function App() {
  return  <React.Fragment>
    <header>
          <Header/>
    </header>
    <main>
      <Routes>
        <Route path = '/' element = {<Home/>} exact/>
        <Route path = '/signup' element = {<Signup/>} exact/>
        <Route path = '/login' element = {<Login/>} exact/>
        <Route path = '/councellor' element = {<Councellor/>} exact />
        <Route path = '/visitor' element = {<Visitor/>} exact/>
        <Route path = '/appointment' element = {<Appointment/>} exact/>
        <Route path = '/fetch' element = {<FetchRegistrations/>} exact/>
        <Route path = '/success' element = {<Success/>} exact/>




      </Routes>
    </main>
  </React.Fragment>
}

export default App;
