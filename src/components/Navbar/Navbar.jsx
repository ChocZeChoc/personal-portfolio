import React from 'react'
import './Navbar.css'
import logo from '/src/assets/img/Choc.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className="header">
        <a href="" className="logo">
            <img src={logo} alt="Logo" height={40} className='logoimg'/>ChocoPoco | Portfolio
        </a>

        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/Portfolio">Porfolio</Link>
            <Link to="/About">About</Link>

        </nav>
    </div>
  )
}

export default Navbar
