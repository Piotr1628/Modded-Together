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
});
