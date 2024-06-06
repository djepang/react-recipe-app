import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
const [recipes, setRecipes] = useState([]);

useEffect(() => {
    const fetchRecipes = async () => {
    const response = await axios.get('http://localhost:3001/recipes');
    setRecipes(response.data);
    };
    fetchRecipes();
}, []);

return (
    <div>
    <h1 className="text-2xl font-bold mb-4">Recipe Overview</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover mt-2" />
        </Link>
        ))}
    </div>
    </div>
);
};

export default Home;
