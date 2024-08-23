import React, { useState } from 'react';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ ingredients: [], recipes: [] });

  const handleSearch = async () => {
    const response = await fetch(`/api/search/?q=${query}`);
    const data = await response.json();
    setResults(data);
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1>Recipe Finder</h1>
      </header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recipes or ingredients..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results">
        <h2>Ingredients</h2>
        <ul>
          {results.ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
        </ul>
        <h2>Recipes</h2>
        <ul>
          {results.recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
