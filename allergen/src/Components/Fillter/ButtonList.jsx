import React from "react";

function ButtonList({ activeAllergens }) {
  const allergens = [
    "milk",
    "eggs",
    "wheat",
    "soy",
    "peanuts",
    "tree nuts",
    "fish",
    "shellfish",
    "sesame",
  ];

  function handleClick() {}

  return (
    <div>
      {allergens.map((allergen) => (
        <button
          className={activeAllergens.includes(allergen) ? "active" : "inactive"}
          onClick={handleClick}
        >
          {allergen}
        </button>
      ))}
    </div>
  );
}
export default ButtonList;
