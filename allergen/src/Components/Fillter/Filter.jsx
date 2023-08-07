import React from "react";
import ButtonList from "./ButtonList";
import SearchBar from "./SearchBar";
import { useState } from "react";
import "./Filterstyles.css";
import { Button } from "@mui/material";

function Filter({
  activeAllergens,
  setActiveAllergens,
  allergens,
  setAllergens,
}) {
  const [showMore, setShowMore] = useState(false);
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
      <div className={showMore ? "" : "smallerFilterContainer"}>
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
      <Button variant="contained" onClick={() => setShowMore(!showMore)}>
        ShowMore
      </Button>
    </div>
  );
}

export default Filter;
