import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './comps/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './comps/Footer';
import './App.css';
import Contact from './pages/Contact';
import Activities from './pages/Activities';
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Register from './pages/Register';
import Login from './pages/Login';
import { UserContextProvider} from './context/userContext';
import DashboardUser from './pages/DashboardUser';
import Profile from './pages/Profile';


axios.defaults.baseURL = 'http://localhost:8000'; // baseURL olarak ayarlanır
axios.defaults.withCredentials = true; // withCredentials ayarı etkinleştirilir


export default function App() {
  return (
    <UserContextProvider>
        
        <div className='App'>
          <Navbar />

          <Toaster
            position="top-center"
            toastOptions={{ duration: 1000 }}
          />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<DashboardUser />} />
        </Routes>
        <Footer />
  
      </UserContextProvider>

  )
}
