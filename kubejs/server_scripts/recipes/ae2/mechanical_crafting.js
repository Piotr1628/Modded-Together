ServerEvents.recipes((event) => {
  event.recipes.create.mechanical_crafting(
    'ae2:spatial_cell_component_2',
    [' DFD ', 'DSLSD', 'FOCEF', 'DSLSD', ' DFD '],
    {
      D: 'minecraft:glowstone_dust',
      S: 'ae2:fluix_pearl',
      C: 'ae2:engineering_processor',
      L: 'ae2:quartz_glass',
      O: 'ae2:formation_core',
      E: 'ae2:annihilation_core',
      F: 'ae2:fluix_crystal',
    },
  );
  event.recipes.create.mechanical_crafting(
    'ae2:spatial_cell_component_16',
    [' DFD ', 'DSLSD', 'FOCEF', 'DSLSD', ' DFD '],
    {
      D: 'minecraft:glowstone_dust',
      S: 'ae2:fluix_pearl',
      C: 'ae2:engineering_processor',
      L: 'ae2:spatial_cell_component_2',
      O: 'ae2:formation_core',
      E: 'ae2:annihilation_core',
      F: 'ae2:fluix_crystal',
    },
  );
  event.recipes.create.mechanical_crafting(
    'ae2:spatial_cell_component_128',
    [' DFD ', 'DSLSD', 'FOCEF', 'DSLSD', ' DFD '],
    {
      D: 'minecraft:glowstone_dust',
      S: 'ae2:fluix_pearl',
      C: 'ae2:engineering_processor',
      L: 'ae2:spatial_cell_component_16',
      O: 'ae2:formation_core',
      E: 'ae2:annihilation_core',
      F: 'ae2:fluix_crystal',
    },
  );
  event.recipes.create.mechanical_crafting('ae2:controller', [' DDD ', 'DSLSD', 'DLCLD', 'DSLSD', ' DDD '], {
    D: 'ae2:sky_stone_block',
    S: 'create:sturdy_sheet',
    C: 'eternal_starlight:unrealium_block',
    L: 'ae2:fluix_crystal',
  });
});
