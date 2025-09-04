import React from 'react'
import './Navbar.css'
import logo from '/src/assets/img/Choc.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className="header">
        <a href="" className="logo">
            <Link to="/personal-portfolio/"><img src={logo} alt="Logo" className='logoimg'/></Link>Portfolio
        </a>

        <nav className="navbar">
            <Link to="/personal-portfolio/">Home</Link>
            <Link to="/personal-portfolio/Portfolio">Projects</Link>
            <Link to="/personal-portfolio/About">About</Link>

        </nav>
    </div>
  )
}

export default Navbar
