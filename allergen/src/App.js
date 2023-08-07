import "./App.css";
import ProductList from "./Components/Product/product-list";
import React, { useState } from "react";
import Filter from "./Components/Fillter/Filter";

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
