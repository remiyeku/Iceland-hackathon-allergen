import React, { useState } from "react";

function SearchBar({
  updateAllergen,
  activeAllergens,
  allergens,
  setAllergens,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  function handleClick() {
    if (!allergens.includes(searchTerm.toLowerCase())) {
      setAllergens([...allergens, searchTerm]);
    }
    if (!activeAllergens.includes(searchTerm.toLowerCase())) {
      updateAllergen(searchTerm);
    }
    console.log(activeAllergens);
  }

  return (
    <div>
      <input type="text" onChange={handleSearch} value={searchTerm} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;
