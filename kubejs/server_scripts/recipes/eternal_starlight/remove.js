ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'eternal_starlight:terra_crystal' },
    { id: 'eternal_starlight:wind_crystal' },
    { id: 'eternal_starlight:water_crystal' },
    { id: 'eternal_starlight:lunar_crystal' },
    { id: 'eternal_starlight:blaze_crystal' },
    { id: 'eternal_starlight:light_crystal' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
