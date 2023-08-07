import React from "react";
import ButtonList from "./ButtonList";
import SearchBar from "./SearchBar";

function Filter({activeAllergens}) {
  return (
    <div>
      <ButtonList activeAllergens={activeAllergens} />
      <SearchBar />
    </div>
  );
}

export default Filter;
