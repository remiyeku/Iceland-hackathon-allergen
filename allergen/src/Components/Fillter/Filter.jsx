import React from "react";
import ButtonList from "./ButtonList";
import SearchBar from "./SearchBar";

function Filter({ activeAllergens, setActiveAllergens, allergens, setAllergens }) {
  function updateAllergen(allergen) {
    allergen = allergen.toLowerCase();
    if (activeAllergens.includes(allergen)) {
      setActiveAllergens(
        activeAllergens.filter(
          (existingAllergen) => existingAllergen !== allergen
        )
      );
    } else setActiveAllergens([...activeAllergens, allergen]);
    console.log(activeAllergens);
  }
  return (
    <div>
      <ButtonList
        activeAllergens={activeAllergens}
        updateAllergen={updateAllergen}
        allergens={allergens}
        setAllergens={setAllergens}
      />
      <SearchBar
        updateAllergen={updateAllergen}
        activeAllergens={activeAllergens}
        allergens={allergens}
        setAllergens={setAllergens}
      />
    </div>
  );
}

export default Filter;
