import React, { useState } from "react";
import "./App.css";
import Filter from "./Components/Fillter/Filter";

function App() {
  const [activeAllergies, setActiveAllergies] = useState([]);
  return (
    <>
      <Filter activeAllergies={activeAllergies} />;
    </>
  );
}

export default App;
