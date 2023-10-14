import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './comps/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Footer from './comps/Footer';
import './App.css'; 
import Contact from './pages/Contact';
import Activities from './pages/Activities';



export default function App() {
  return (
<>
<div className='App'>
<Navbar/>
</div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    

    
<Footer/>
</>
  )
}
