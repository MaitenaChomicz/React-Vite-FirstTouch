import React, { useState } from 'react'
import './RecipeCard.css'

const RecipeCard = ({ recipe, onDelete }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleRM = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <h3>{recipe.title}</h3>

      <strong>Time</strong>{' '} {recipe.time}
      
      <p>
        <strong>Ingredients:</strong>{' '}
        {recipe.ingredients.map((ingredient, index) => (
          <span key={index}>
            {ingredient.name} ({ingredient.quantity} G)
            {index < recipe.ingredients.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>

      

      <button onClick={handleToggleRM} className='boton-mas-menos'>
        {showMore ? 'Read Less' : 'Read More'}
      </button>

      {showMore && (
        <div>
          <strong>Nutritions Facts:</strong>{' '}
          <p>Calories: {recipe.nutrition.calories.toFixed(2)} kcal</p>
          <p>Proteins: {recipe.nutrition.protein.toFixed(2)} G</p>
          <p>Carbs: {recipe.nutrition.carbs.toFixed(2)} G</p>

          <strong>Description</strong>{' '}
          <p>{recipe.description}</p>

        </div>
      )}

      <button onClick={onDelete} className='boton-borrar'>Delete</button>
      
    </div>
  );
}

export default RecipeCard;
