ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'malum:malignant_pewter_plating' },
    { id: 'malum:soul_stained_steel_plating' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
