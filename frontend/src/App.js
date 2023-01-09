import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';

const App = () => {
  return (
    <Router>
        <Header/>
    </Router>
  )
}

export default App;