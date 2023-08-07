function ButtonList({ activeAllergens, updateAllergen, allergens, setAllergens }) {


  return (
    <div>
      {allergens.map((allergen) => (
        <button
          allergen={allergen}
          className={activeAllergens.includes(allergen) ? "active" : "inactive"}
          onClick={() => updateAllergen(allergen)}
        >
          {allergen}
        </button>
      ))}
    </div>
  );
}
export default ButtonList;
