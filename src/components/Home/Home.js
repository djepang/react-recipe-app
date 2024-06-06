import React from 'react';

const Home = ({ recipes }) => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
