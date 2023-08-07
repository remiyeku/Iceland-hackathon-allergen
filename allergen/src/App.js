import "./App.css";
import ProductList from "./Components/Product/product-list";
import React, { useState } from "react";
import Filter from "./Components/Fillter/Filter";
import productArray from "./db.js";

function App() {
  const [activeAllergens, setActiveAllergens] = useState([]);
  const [allergens, setAllergens] = useState([
    "dairy",
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
      <ProductList data={productArray} activeAllergens={activeAllergens} />
    </>
  );
}

export default App;
