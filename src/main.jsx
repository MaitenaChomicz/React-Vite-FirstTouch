import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Menu, Home, CreateRecipe, RecipeHistory, Footer} from './comp/index.js';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Menu/>
    <Home/>
    <CreateRecipe/>
    <RecipeHistory/>
    <Footer/>
    
  </StrictMode>,
) 