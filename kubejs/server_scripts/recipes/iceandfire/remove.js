ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'iceandfire:dragonforge_lightning_core_disabled' },
    { id: 'iceandfire:dragonforge_ice_core_disabled' },
    { id: 'iceandfire:dragonforge_fire_core_disabled' },
    { id: 'iceandfire:dragonforge_lightning_input' },
    { id: 'iceandfire:dragonforge_fire_input' },
    { id: 'iceandfire:dragonforge_ice_input' },
    { id: 'iceandfire:summoning_crystal_ice' },
    { id: 'iceandfire:summoning_crystal_fire' },
    { id: 'iceandfire:summoning_crystal_lightning' },
    { id: 'iceandfire:dragonforge/dragonsteel_lightning_ingot' },
    { id: 'iceandfire:dragonforge/dragonsteel_fire_ingot' },
    { id: 'iceandfire:dragonforge/dragonsteel_ice_ingot' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
