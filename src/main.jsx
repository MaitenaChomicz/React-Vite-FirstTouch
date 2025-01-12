import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Menu, Home, CreateRecipe, RecipeHistory, Footer} from './comp/index.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Menu/>
    <Home/>
    <CreateRecipe/>
    <RecipeHistory/>
    <Footer/>
    
  </StrictMode>,
) 