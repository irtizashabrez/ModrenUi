import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.svg';

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar_links">
        <div className="gpt3_navbar_links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar_links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#gpt3">What is GPT3</a></p>
          <p><a href="#possibilities">Open Ai</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3_navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3_navbar_menu">
        {toggleMenu
        ? <RiCloseLine color='white' size={27} 
            onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='white' size={27} 
            onClick={() => setToggleMenu(true)}/>
        }
      </div>
    </div>
  )
}

export default Navbar