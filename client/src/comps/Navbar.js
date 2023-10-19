import React from 'react'
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    < div className='navbar' >
      <div>
        <img src='https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn' />
      </div>
      <nav>
        <NavLink to='/' > home </NavLink>
        <NavLink to='/about' > about </NavLink>
        <NavLink to='/activities' > activities </NavLink>
        <NavLink to='/contact' > contact </NavLink>
        <NavLink to='/register' > My Account</NavLink>
      </nav>

    </div>
  )
}
