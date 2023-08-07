import React, { useState } from "react";
import "./App.css";
import Filter from "./Components/Fillter/Filter";

function App() {
  const [activeAllergens, setActiveAllergens] = useState([]);
  const [allergens, setAllergens] = useState([
    "milk",
    "eggs",
    "wheat",
    "soy",
    "peanuts",
    "tree nuts",
    "fish",
    "shellfish",
    "sesame",
  ]);

  return (
    <>
      <Filter
        allergens={allergens}
        setAllergens={setAllergens}
        activeAllergens={activeAllergens}
        setActiveAllergens={setActiveAllergens}
      />
      ;
    </>
  );
}

export default App;
