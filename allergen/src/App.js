import React, { useState } from "react";
import "./App.css";
import Filter from "./Components/Fillter/Filter";

function App() {
  const [activeAllergens, setActiveAllergens] = useState(["chicken"]);

  return (
    <>
      <Filter
        activeAllergens={activeAllergens}
        setActiveAllergens={setActiveAllergens}
      />
      ;
    </>
  );
}

export default App;
