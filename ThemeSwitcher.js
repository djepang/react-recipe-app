import React, { useState } from 'react';
import RecipeList from './RecipeList';
import ThemeSwitcher from './ThemeSwitcher';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme}>
      <ThemeSwitcher toggleTheme={toggleTheme} currentTheme={theme} />
      <RecipeList />
    </div>
  );
}

export default App;
