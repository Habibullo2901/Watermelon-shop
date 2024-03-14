import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Nav = () => {
  return (
    <div className='nav'>
      <nav className='navbar'>
        <div className='logo'><p>Watermelon shop</p></div>
        <ul>
          <li><NavLink activeclassname="active" to={"/"}>Home</NavLink></li>
          <li><NavLink activeclassname="active" to={"/like"}>Like</NavLink></li>
          <li><NavLink activeclassname="active" to={"/selects"}>Selects</NavLink> </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav