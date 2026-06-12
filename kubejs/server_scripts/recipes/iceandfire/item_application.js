ServerEvents.recipes((event) => {
  event.recipes.create.item_application('iceandfire:dragonforge_fire_input', [
    'iceandfire:dragonforge_fire_brick',
    'malum:anomalous_design',
  ]);

  event.recipes.create.item_application('iceandfire:dragonforge_ice_input', [
    'iceandfire:dragonforge_ice_brick',
    'malum:anomalous_design',
  ]);

  event.recipes.create.item_application('iceandfire:dragonforge_lightning_input', [
    'iceandfire:dragonforge_lightning_brick',
    'malum:anomalous_design',
  ]);
});
