ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'eidolon_repraised:worktable' },
    { id: 'eidolon_repraised:arcane_gold_ingot' },
    { id: 'eidolon_repraised:arcane_gold_nugget' },
    { id: 'eidolon_repraised:arcane_gold_block' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
