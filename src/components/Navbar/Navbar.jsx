/* eslint-disable no-unused-vars */

import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import Logo from "../../assets/logo.png"
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80 ){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  

  return (
    <div ref={navRef} className='navbar'>
      <div className='navbar-left'>
          <img src={Logo} alt="" />
          <ul>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movie</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse Languages</li>
          </ul>
      </div>
      <div className='navbar-right'> 
          <img src={search_icon} alt="" className='icons'/>
          <p>Children</p>
          <img src={bell_icon} alt="icons" />
          <div className="navbar-profile">
          <img src={profile_img} alt=""  className='profile'/>
          <img src={caret_icon} alt="" />
          <div className="dropdown">Sign Out of netflix</div>
          </div>
      </div>
    </div>
  )
}

export default Navbar