ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'cataclysm:smithing/ignitium_helmet' },
    { id: 'cataclysm:smithing/ignitium_chestplate' },
    { id: 'cataclysm:smithing/ignitium_leggings' },
    { id: 'cataclysm:smithing/ignitium_boots' },
    { id: 'cataclysm:smithing/cursium_helmet' },
    { id: 'cataclysm:smithing/cursium_chestplate' },
    { id: 'cataclysm:smithing/cursium_leggings' },
    { id: 'cataclysm:smithing/cursium_boots' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
