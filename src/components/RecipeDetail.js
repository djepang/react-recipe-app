import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then(response => response.json())
      .then(data => setRecipe(data));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl mb-4">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-2xl">Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl mt-4">Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
