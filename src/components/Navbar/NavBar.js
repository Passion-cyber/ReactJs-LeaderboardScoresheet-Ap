import React from 'react'
import './navbar.css'


const NavBar = () => {
   
  return (
    <div className='nav-container'>
    <header className="main-header">        
      <div className="logo">
        <a href="#">
            <img src="./images/snap-shot.png" className='image-logo' alt="learnable-logo" />
        </a>

      </div>
      <div className="navigation">
        <button className='navigation-button'>Everything is learnable</button>
      </div>
    </header>
    </div>
  )
}

export default NavBar