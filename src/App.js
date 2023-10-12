import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './comps/Navbar'
import Home from './comps/Home';
import About from './comps/About';
import Footer from './comps/Footer';
import './App.css'; 
import Contact from './comps/Contact';
import Blog from './comps/Blog';
import Activities from './comps/Activities';



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
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    

    
<Footer/>
</>
  )
}
