import React, { useState } from 'react'
import './CreateRecipe.css'
import IngList from './compCR/IngList'
import RBuilder from './compCR/RBuilder'
import RSummary from './compCR/RSummary'
import {IngInfo} from '../Data/DataFileIng'

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
  
    const handleSelectIngredient = (ingredient) => {
      if (!selectedIngredients.some(item => item.id === ingredient.id)) {
        setSelectedIngredients([...selectedIngredients, { ...ingredient, quantity: 1 }]);
      }
    };
  
    const handleUpdateQuantity = (id, quantity) => {
      setSelectedIngredients(prev =>
        prev.map(ingredient =>
          ingredient.id === id ? { ...ingredient, quantity } : ingredient
        )
      );
    };

    const handleRemoveIngredient = (id) => {
      setSelectedIngredients(selectedIngredients.filter(ingredient => ingredient.id !== id));
    };
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
  
    const handleTimeChange = (e) => {
      setTime(e.target.value);
    };

    const handleSaveRecipe = () => {
      const nutrition = calculateNutrition(selectedIngredients);
  
      const recipe = {
        title,
        ingredients: selectedIngredients,
        nutrition,
        description,
        time,
      };
  
      const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
  
      storedRecipes.push(recipe);
  
      localStorage.setItem('recipes', JSON.stringify(storedRecipes));
  
      setTitle('');
      setSelectedIngredients([]);
      setTime('');
      setDescription('');
    };
  
    const calculateNutrition = (ingredients) => {
      return ingredients.reduce(
        (acc, ingredient) => ({
          calories: acc.calories + ingredient.calories * ingredient.quantity,
          protein: acc.protein + ingredient.protein * ingredient.quantity,
          carbs: acc.carbs + ingredient.carbs * ingredient.quantity
        }),
        { calories: 0, protein: 0, carbs: 0 }
      );
    };
  
    return (
      <section className='container-CR'>
        <h2 id='section-create'>Create Recipe</h2>
      <div className='space-CR'>
         

        <label htmlFor="title"></label>
        <input type="text"
          placeholder="Title of the recipe"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
  
        <IngList ingredients={IngInfo} onSelectIngredient={handleSelectIngredient} />
        <RBuilder
          selectedIngredients={selectedIngredients}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveIngredient={handleRemoveIngredient}
        />
        <RSummary ingredients={selectedIngredients} description={description} />

        <h3>Time</h3>
        <label htmlFor="time"></label>
        <input type="number"
          placeholder="Time for elaboration"
          value={time}
          onChange={handleTimeChange}
        />

        <h3>Description</h3>
        <label htmlFor="description"></label>
        <input type="text"
          id="description"
          placeholder="Description of the recipe"
          value={description}
          onChange={handleDescriptionChange}
        />
        
        <button className='boton-save' onClick={handleSaveRecipe}>Save</button>
      </div>
      </section>
    );
}

export default CreateRecipe