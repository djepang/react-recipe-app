import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await axios.get(`http://localhost:3001/recipes/${id}`);
      setRecipe(response.data);
    };
    fetchRecipe();
}, [id]);

if (!recipe) return <div>Loading...</div>;

return (
    <div>
    <h1 className="text-2xl font-bold mb-4">{recipe.name}</h1>
    <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover mb-4" />
    <h2 className="text-xl font-bold mb-2">Ingredients</h2>
    <ul className="list-disc list-inside">
        {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
        ))}
    </ul>
    <h2 className="text-xl font-bold mt-4 mb-2">Instructions</h2>
    <p>{recipe.instructions}</p>
    </div>
);
};

export default RecipeDetail;