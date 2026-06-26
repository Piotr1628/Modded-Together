ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'apotheosis:simple_reforging_table' },
    { id: 'apotheosis:reforging_table' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
