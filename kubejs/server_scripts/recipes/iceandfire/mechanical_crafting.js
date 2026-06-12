ServerEvents.recipes((event) => {
  event.recipes.create.mechanical_crafting(
    'iceandfire:dragonforge_lightning_core_disabled',
    [' B B ', 'BSFSB', ' AHA ', 'BSDSB', ' B B '],
    {
      H: 'iceandfire:lightning_dragon_heart',
      B: 'iceandfire:dragonforge_lightning_brick',
      F: 'cataclysm:void_core',
      S: 'create:sturdy_sheet',
      A: 'malum:soul_stained_steel_plating',
      D: 'malum:paracausal_flame',
    },
  );

  event.recipes.create.mechanical_crafting(
    'iceandfire:dragonforge_ice_core_disabled',
    [' B B ', 'BSFSB', ' AHA ', 'BSDSB', ' B B '],
    {
      H: 'iceandfire:ice_dragon_heart',
      B: 'iceandfire:dragonforge_ice_brick',
      F: 'cataclysm:void_core',
      S: 'create:sturdy_sheet',
      A: 'malum:soul_stained_steel_plating',
      D: 'malum:paracausal_flame',
    },
  );

  event.recipes.create.mechanical_crafting(
    'iceandfire:dragonforge_fire_core_disabled',
    [' B B ', 'BSFSB', ' AHA ', 'BSDSB', ' B B '],
    {
      H: 'iceandfire:fire_dragon_heart',
      B: 'iceandfire:dragonforge_fire_brick',
      F: 'cataclysm:void_core',
      S: 'create:sturdy_sheet',
      A: 'malum:soul_stained_steel_plating',
      D: 'malum:paracausal_flame',
    },
  );
});
