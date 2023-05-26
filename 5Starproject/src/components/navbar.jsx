import React, { useState, useEffect } from 'react'
import { HashLink as NavLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Fundraising from './fundraising'
import logo from '../images/Logo.webp';




export default function Navbar(){
  //The drop down navbar
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  // MANAGE SCROLL TO DISPLAY BOX SHADOW 

  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    function handleScroll(){
      const currentPosition = window.pageYOffset;
      if (currentPosition > 100){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  }, [])

  return (
    <nav className="navbar" style={{boxShadow: isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none"}}>
      <div className="container nav">
        <div className="logo">
            <NavLink to="https://www.5starmums.com" smooth><img src={logo} /></NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FontAwesomeIcon icon={showNavbar ? faTimes : faBars}/>

        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="#donate" smooth>Donate</NavLink>
            </li>
            <li>
              <NavLink to="https://www.5starmums.com/Community" smooth>Community</NavLink>
            </li>

            <li>
              <NavLink to="pricing" smooth>Pricing</NavLink>
            </li>
        
            <li>
              <NavLink to="#aboutUs" smooth>About</NavLink>
            </li>
            <li>
              <NavLink to="#contactUs" smooth>Contact Us</NavLink>
            </li>
          </ul>

          
        </div>
        <div className={`cta nav-elements ${showNavbar}`}>
            <a href='https://www.5starmums.com/Community' target='_self'  className='btn btn-tertiary'>Log in</a>
            <a href='https://www.5starmums.com/Community/register' target='_self' className='btn btn-primary'>Sign Up</a>
        </div>
      </div>
    </nav>
  )
}

