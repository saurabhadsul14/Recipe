import React from "react";

const CuisineList = ({ cuisines, onSelectCuisine }) => {
  return (
    <div className="cuisine-list">
      <h2>Select a Cuisine</h2>
      <div className="cuisine-grid">
        {cuisines.map((cuisine, index) => (
          <div
            key={index}
            className="cuisine-item"
            onClick={() => onSelectCuisine(cuisine)}
          >
            <img
              src={cuisine.image}
              alt={cuisine.name}
              className="cuisine-image"
            />
            <h3>{cuisine.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuisineList;
