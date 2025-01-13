import React from 'react'
import './Menu.css'
import logo from '../../assets/images/logo.png';

const Menu = () => {
  return (
    <>
    <section>
    <div>
      <nav>
        <ul>
          <li><img src={logo} alt="Logo" class='logomenu'/></li>
          <li><a href="#section-home">Home</a></li>
          <li><a href="#section-create">Create Recipes</a></li>
          <li><a href="#section-recipes">My Recipes</a></li>

        </ul>
      </nav>
      
    </div>
    </section>
    </>
    
  )
}

export default Menu
