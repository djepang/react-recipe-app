import React, { useEffect, useState } from 'react';
import fetchRecipes from '../src/fetchRecipes';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
      } catch (err) {
        setError(err);
      }
    };
    getRecipes();
  }, []);

  return (
    <div className="App">
      <h1>Recipes</h1>
      {error && <p>Error: {error.message}</p>}
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
