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
});
