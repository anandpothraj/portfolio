import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App;