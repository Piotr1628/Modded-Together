ServerEvents.recipes((event) => {
  event.recipes.create.mechanical_crafting(
    'extendedae:crystal_assembler',
    [' DFD ', 'DSPSD', 'FOCOF', 'DSLSD', ' DFD '],
    {
      D: 'ae2:printed_silicon',
      S: 'ae2:fluix_glass_cable',
      C: 'extendedae:machine_frame',
      L: 'ae2:sky_stone_tank',
      O: 'ae2:logic_processor',
      F: 'extendedae:entro_ingot',
      P: 'ae2:crafting_terminal',
    },
  );

  event.recipes.create.mechanical_crafting(
    'extendedae:assembler_matrix_frame',
    [' DFD ', 'DSLSD', 'FLCLF', 'DSLSD', ' DFD '],
    {
      D: 'minecraft:quartz',
      S: 'ae2:sky_stone_block',
      C: 'extendedae:machine_frame',
      L: 'minecraft:lapis_lazuli',
      F: 'eternal_starlight:unrealium_ingot',
    },
  );
});
