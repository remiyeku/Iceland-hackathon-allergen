import React from "react";

function ButtonList({ activeAllergens, updateAllergen }) {
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

  return (
    <div>
      {allergens.map((allergen) => (
        <button
          allergen={allergen}
          className={activeAllergens.includes(allergen) ? "active" : "inactive"}
          onClick={() => updateAllergen(allergen)}
        >
          {allergen}
        </button>
      ))}
    </div>
  );
}
export default ButtonList;
