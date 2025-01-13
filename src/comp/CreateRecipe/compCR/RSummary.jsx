import React from 'react'
import './RSummary.css'

const RSummary = ({ ingredients }) => {

 const totalNutrition = ingredients.reduce(
  (acc, ingredient) => ({
    calories: acc.calories + (ingredient.calories / 100) * ingredient.quantity,
    protein: acc.protein + (ingredient.protein / 100) * ingredient.quantity,
    carbs: acc.carbs + (ingredient.carbs / 100) * ingredient.quantity
  }),
  { calories: 0, protein: 0, carbs: 0 }
);


return (
  <div>
    <h3>Nutritions Facts</h3>
    <div>
      <p>Calories: {totalNutrition.calories.toFixed(2)} kcal</p>
      <p>Proteins: {totalNutrition.protein.toFixed(2)} G</p>
      <p>Carbs: {totalNutrition.carbs.toFixed(2)} G</p>
    </div>
  </div>
);
}

export default RSummary