import React, { useState } from "react";
import RecipeDetail from "./RecipeDetail";

const CuisineDetail = ({ cuisine, onBack }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="cuisine-detail">
      <button className="back-button" onClick={onBack}>
        Back
      </button>
      <h2>{cuisine.name} Recipes</h2>
      {!selectedRecipe ? (
        <div className="recipe-grid">
          {cuisine.recipes.map((recipe, index) => (
            <div
              key={index}
              className="recipe-item"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe-image"
              />
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <RecipeDetail
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
};

export default CuisineDetail;
