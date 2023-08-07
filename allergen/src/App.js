import "./App.css";
import ProductList from "./Components/Product/product-list";
import React, { useState } from "react";
import Filter from "./Components/Fillter/Filter";
import productArray from "./db.js";

function App() {
  //const [activeAllergens, setActiveAllergens] = useState([]);

  return (
    <>
      <ProductList data={productArray} />
    </>
  );
}

export default App;
