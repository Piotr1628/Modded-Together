ServerEvents.recipes((event) => {
  //Malum
  event.recipes.create.pressing(
    "malum:malignant_pewter_plating",
    "malum:malignant_pewter_ingot",
  );
  event.recipes.create.pressing(
    "malum:soul_stained_steel_plating",
    "malum:soul_stained_steel_ingot",
  );
  //AE2
  event.recipes.create.pressing("ae2:printed_silicon", "ae2:silicon");
});
