ServerEvents.recipes((event) => {
  // Chips
  event.recipes.oritech
    .assembler()
    .itemInputs([
      'ae2:printed_engineering_processor',
      'ae2:printed_silicon',
      'create_connected:control_chip',
      'minecraft:redstone',
    ])
    .itemOutputs('ae2:engineering_processor')
    .time(400);

  event.recipes.oritech
    .assembler()
    .itemInputs([
      'ae2:printed_logic_processor',
      'ae2:printed_silicon',
      'create_connected:control_chip',
      'minecraft:redstone',
    ])
    .itemOutputs('ae2:logic_processor')
    .time(400);

  event.recipes.oritech
    .assembler()
    .itemInputs([
      'ae2:printed_calculation_processor',
      'ae2:printed_silicon',
      'create_connected:control_chip',
      'minecraft:redstone',
    ])
    .itemOutputs('ae2:calculation_processor')
    .time(400);

  // Cores
  event.recipes.oritech
    .assembler()
    .itemInputs(['ae2:logic_processor', '#c:gems/certus_quartz', 'ae2:fluix_dust', 'unify:iron_sheet'])
    .itemOutputs('ae2:formation_core')
    .time(400);

  event.recipes.oritech
    .assembler()
    .itemInputs(['ae2:logic_processor', '#c:gems/quartz', 'ae2:fluix_dust', 'unify:iron_sheet'])
    .itemOutputs('ae2:annihilation_core')
    .time(400);

  event.recipes.oritech
    .assembler()
    .itemInputs(['ae2:quartz_fiber', 'ae2:fluix_dust', 'ae2:fluix_dust', 'ae2:fluix_dust'])
    .itemOutputs('ae2:fluix_glass_cable')
    .time(20);

  event.recipes.oritech
    .assembler()
    .itemInputs(['#c:gems/quartz', '#c:gems/quartz', '#c:gems/quartz', 'minecraft:glass'])
    .itemOutputs('ae2:quartz_fiber')
    .time(20);

  event.recipes.oritech
    .assembler()
    .itemInputs(['ae2:logic_processor', 'ae2:calculation_processor', '#c:gems/quartz', '#c:gems/quartz'])
    .itemOutputs('ae2:cell_component_1k')
    .time(20);

  event.recipes.oritech
    .assembler()
    .itemInputs(['ae2:cell_component_1k', 'ae2:cell_component_1k', 'ae2:cell_component_1k', 'ae2:cell_component_1k'])
    .itemOutputs('ae2:cell_component_4k')
    .time(40);

  // 4k -> 16k
  event.recipes.oritech
    .assembler()
    .itemInputs(['ae2:cell_component_4k', 'ae2:cell_component_4k', 'ae2:cell_component_4k', 'ae2:cell_component_4k'])
    .itemOutputs('ae2:cell_component_16k')
    .time(160);

  // 32k -> 64k
  event.recipes.oritech
    .assembler()
    .itemInputs([
      'ae2:cell_component_16k',
      'ae2:cell_component_16k',
      'ae2:cell_component_16k',
      'ae2:cell_component_16k',
    ])
    .itemOutputs('ae2:cell_component_64k')
    .time(640);

  // 64k -> 256k
  event.recipes.oritech
    .assembler()
    .itemInputs([
      'ae2:cell_component_64k',
      'ae2:cell_component_64k',
      'ae2:cell_component_64k',
      'ae2:cell_component_64k',
    ])
    .itemOutputs('ae2:cell_component_256k')
    .time(2560);
});
