import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import Report from './pages/Report';
import Privacy from './pages/Privacy';
import Feedback from './pages/Feedback';

const App = () => {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/projects' element={<Projects/>} exact/>
          <Route path='/blogs' element={<Blogs/>} exact/>
          <Route path='/about' element={<About/>} exact/>
          <Route path='/contact' element={<Contact/>} exact/>
          <Route path='/report' element={<Report/>} exact/>
          <Route path='/privacy-policy' element={<Privacy/>} exact/>
          <Route path='/feedback' element={<Feedback/>} exact/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App;