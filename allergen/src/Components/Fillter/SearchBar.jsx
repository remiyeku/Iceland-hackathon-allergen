import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

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
    if (searchTerm === "") return;
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
      <TextField type="text" onChange={handleSearch} value={searchTerm} />
      <Button onClick={handleClick}>Search</Button>
    </div>
  );
}

export default SearchBar;
