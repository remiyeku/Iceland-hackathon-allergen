
import "./App.css";
import ProductList from "./components/Product/product-list";
import React, { useState } from "react";
import Filter from "./components/Fillter/Filter";

function App() {
  const [activeAllergies, setActiveAllergies] = useState([]);
  return (
    <>
      <Filter activeAllergies={activeAllergies} />;
      <ProductList />
    </>
    
  );
}

export default App;
