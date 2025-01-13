import React from 'react'
import './Home.css'
import logo from '../../assets/images/logo.png';

const Home = () => {
  return (
    <>
    <section>
    <div className='blockintro' id='introhome'>
        <img src={logo} alt="Logo" />
        <h1 id='section-home'>Recipe App</h1>
        <p className='textint'>Bienvenido a nuestra aplicación de recetas personalizadas, donde la creatividad y la nutrición se encuentran. Con nuestra herramienta interactiva, puedes seleccionar tus ingredientes favoritos de una lista, arrastrarlos a tu panel de trabajo y ajustar las cantidades según tus preferencias. A medida que construyes tu receta, obtendrás un puntaje nutricional en tiempo real, ayudándote a crear comidas deliciosas y equilibradas. ¡Comienza a experimentar con tus ingredientes y descubre nuevas formas de disfrutar de una cocina saludable y personalizada!</p>
        <button className='btn-intro'><a href="#section-create">Create Recipe</a></button>
    </div>
    </section>
    </>
  )
}

export default Home