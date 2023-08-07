import React from "react";
import ButtonList from "./ButtonList";
import SearchBar from "./SearchBar";

function Filter({ activeAllergens, setActiveAllergens }) {
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
      />
      <SearchBar
        updateAllergen={updateAllergen}
        activeAllergens={activeAllergens}
      />
    </div>
  );
}

export default Filter;
