import React from 'react'
import './RBuilder.css'

const RBuilder = ({ selectedIngredients, onUpdateQuantity, onRemoveIngredient }) => {
  return (
    <div>
      <h3>Ingredients</h3>
      <div>
      <ul  className='ingredients-box'>
        {selectedIngredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.name} ({ingredient.category})  
            <input
              type="number"
              min="1"
              value={ingredient.quantity}
              onChange={(e) => onUpdateQuantity(ingredient.id, parseInt(e.target.value, 10))}
            />
            G
            <button className='boton-delete' onClick={() => onRemoveIngredient(ingredient.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default RBuilder