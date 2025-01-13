import React, { useState } from 'react'
import './IngList.css'

const IngList = ({ ingredients, onSelectIngredient }) => {
  const [selectedIngredientId, setSelectedIngredientId] = useState('');

  const handleSelectChange = (e) => {
    const selectedId = parseInt(e.target.value, 10);
    setSelectedIngredientId(selectedId);

    const selectedIngredient = ingredients.find(ingredient => ingredient.id === selectedId);

    if (selectedIngredient) {
      onSelectIngredient(selectedIngredient);
    }
  };

  return (
    <div className='ingredient-list'>
      <h3>Select the Ingredients</h3>
      <label htmlFor="ingredient-select"></label>
      <select
        id="ingredient-select"
        value={selectedIngredientId}
        onChange={handleSelectChange}
      >
        <option value="">Select</option>
        {ingredients.map(ingredient => (
          <option key={ingredient.id} value={ingredient.id}>
            {ingredient.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default IngList