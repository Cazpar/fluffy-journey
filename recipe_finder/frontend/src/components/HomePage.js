import React, { useState } from 'react';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    console.log(`Searching for ${query}`);
    // Fetch recipes from backend API
    try {
      const response = await fetch(`/api/recipes/?search=${query}`);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1>Recipe Finder</h1>
      </header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-item">
              <img src={recipe.image} alt={recipe.name} />
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </div>
          ))
        ) : (
          <p>No recipes found. Try searching for something else.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
