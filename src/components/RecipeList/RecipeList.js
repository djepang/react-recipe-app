import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeList = () => {
const [recipes, setRecipes] = useState([]);

useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(data => setRecipes(data));
}, []);

return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {recipes.map(recipe => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
        <div className="border p-4">
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
            <h2 className="text-xl">{recipe.name}</h2>
        </div>
        </Link>
    ))}
    </div>
);
};

export default RecipeList;
