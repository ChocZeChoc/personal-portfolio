import React from 'react'
import './Navbar.css'
import logo from '/src/assets/img/Choc.png'

const Navbar = () => {

  return (
    <div className="header">
        <a href="" className="logo">
            <img src={logo} alt="Logo" height={40} className='logoimg'/>ChocoPoco | Portfolio
        </a>

        <nav className="navbar">
            <a href="/Home">Home</a>
            <a href="/Portfolio">Portfolio</a>
            <a href="/">About</a>

        </nav>
    </div>
  )
}

export default Navbar
