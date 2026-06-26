ServerEvents.recipes((event) => {
  const recipes = [{ id: 'minecraft:copper_trapdoor' }];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
