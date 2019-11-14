import React from 'react';
import './App.css';
import NavBar from './navbar/navBar'
import Logo from "./Logo/logo";
import HomePage from "../requestPage/requestPage";

function App() {
  return (
    <React.Fragment>
        <NavBar></NavBar>
        <HomePage></HomePage>
    </React.Fragment>
  );
}

export default App;
