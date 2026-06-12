ServerEvents.recipes((event) => {
  event.recipes.create.mechanical_crafting('ae2:cell_component_1k', ['DSD', 'SCS', 'DSD'], {
    D: 'minecraft:redstone',
    S: 'ae2:certus_quartz_crystal',
    C: 'ae2:logic_processor',
  });
  event.recipes.create.mechanical_crafting('ae2:cell_component_4k', ['DED', 'SCS', 'DSD'], {
    D: 'minecraft:redstone',
    S: 'ae2:cell_component_1k',
    E: 'ae2:calculation_processor',
    C: 'ae2:quartz_glass',
  });
  event.recipes.create.mechanical_crafting('ae2:cell_component_16k', ['DED', 'SCS', 'DSD'], {
    D: 'minecraft:glowstone_dust',
    S: 'ae2:cell_component_4k',
    E: 'ae2:calculation_processor',
    C: 'ae2:quartz_glass',
  });
  event.recipes.create.mechanical_crafting('ae2:cell_component_64k', ['DED', 'SCS', 'DSD'], {
    D: 'minecraft:glowstone_dust',
    S: 'ae2:cell_component_16k',
    E: 'ae2:calculation_processor',
    C: 'ae2:quartz_glass',
  });
  event.recipes.create.mechanical_crafting('ae2:cell_component_256k', ['DED', 'SCS', 'DSD'], {
    D: 'ae2:sky_dust',
    S: 'ae2:cell_component_64k',
    E: 'ae2:calculation_processor',
    C: 'ae2:quartz_glass',
  });
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
  event.recipes.create.mechanical_crafting('ae2:controller', [' DDD ', 'DSLSD', 'DOCED', 'DSLSD', ' DDD '], {
    D: 'ae2:printed_silicon',
    S: 'eternal_starlight:unrealium_ingot',
    C: 'irons_spellbooks:energized_core',
    L: 'ae2:fluix_crystal',
    O: 'ae2:formation_core',
    E: 'ae2:annihilation_core',
  });
});
