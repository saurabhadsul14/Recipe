import React from "react";

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index} onClick={() => onSelectRecipe(recipe)}>
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
