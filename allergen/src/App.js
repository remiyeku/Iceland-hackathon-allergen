import "./App.css";
import ProductList from "./components/Product/product-list";
import React, { useState } from "react";
import Filter from "./components/Fillter/Filter";
import productArray from "./db.js";


function App() {
  const [activeAllergies, setActiveAllergies] = useState([]);
  return (
    <>
      <Filter activeAllergies={activeAllergies} />;
      <ProductList data={productArray} />
    </>
  );
}

export default App;
