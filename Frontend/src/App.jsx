import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  

  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route path='/' element={<>
          <HeroSection/>
          <Services/>
          <About/>
        </>}/> 
          <Route path='/hero' element={ <HeroSection/>}/> 
          <Route path='/services' element={ <Services/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/contact' element={ <Contact/>}/> 
        </Routes>
        <Contact/>
        <Footer/>
        <Toaster/>
    </Router>
  )
}

export default App
