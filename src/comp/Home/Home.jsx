import React from 'react'
import './Home.css'
import logo from '../../assets/images/logo.png';

const Home = () => {
  return (
    <>
    <section>
    <div className='blockintro' id='introhome'>
        <img src={logo} alt="Logo" id='logo-home'/>
        <h1>Recipes App</h1>
        <p className='textint'>Welcome to our custom recipes app, where creativity and nutrition meet. With our interactive tool, you can select your favorite ingredients from a list, drag them to your work panel and adjust the quantities according to your preferences. As you build your recipe, you'll get real-time nutritional scoring, helping you create delicious, balanced meals. Start experimenting with your ingredients and discover new ways to enjoy healthy and personalized cooking!</p>
        <button className='btn-intro'><a href="#section-create">Create Recipe</a></button>
    </div>
    </section>
    </>
  )
}

export default Home