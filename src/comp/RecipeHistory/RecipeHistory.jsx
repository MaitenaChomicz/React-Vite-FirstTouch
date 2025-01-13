import React, { useState, useEffect } from 'react';
import "./RecipeHistory.css"
import RecipeCard from './compRH/RecipeCard';

const RecipeHistory = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  const handleDeleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToList = () => {
    setSelectedRecipe(null);
  };

  return (
    <section id='RecipeHistory' className='container'>
      <div>
        <h2 className='SlideLine text-center fw-bolder'></h2>
    
        {selectedRecipe ? (
          <div>
            <button onClick={handleBackToList}>Back</button>
            <h3>{selectedRecipe.name}</h3>
            <p>{selectedRecipe.description}</p>
            
          </div>
        ) : (
          recipes.length === 0 ? (
            <p className='empty-list'>You haven't created your first recipe yet</p>
          ) : (
            recipes.map((recipe, index) => (
              <RecipeCard 
                key={index} 
                recipe={recipe} 
                onDelete={() => handleDeleteRecipe(index)} 
                onViewDetails={() => handleViewDetails(recipe)} 
              />
            ))
          )
        )}
      </div>
    </section>
  );
};

export default RecipeHistory;
