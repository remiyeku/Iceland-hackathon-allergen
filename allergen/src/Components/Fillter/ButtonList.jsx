import { Button } from "@mui/material";

function ButtonList({
  activeAllergens,
  updateAllergen,
  allergens,
  setAllergens,
}) {
  return (
    <div>
      {allergens.map((allergen) => (
        <Button
          variant={
            activeAllergens.includes(allergen) ? "contained" : "outlined"
          }
          key={allergen}
          allergen={allergen}
          //   className={activeAllergens.includes(allergen) ? "active" : "inactive"}
          onClick={() => updateAllergen(allergen)}
        >
          {allergen}
        </Button>
      ))}
    </div>
  );
}
export default ButtonList;
