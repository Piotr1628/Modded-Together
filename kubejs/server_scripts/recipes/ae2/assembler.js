ServerEvents.recipes((event) => {
  // engineering processor
  event.recipes.oritech
    .assembler()
    .itemInputs([
      'ae2:printed_engineering_processor',
      'ae2:printed_silicon',
      'minecraft:redstone',
      'minecraft:redstone',
    ])
    .itemOutputs('ae2:engineering_processor')
    .time(100);

  // logic processor
  event.recipes.oritech
    .assembler()
    .itemInputs(['ae2:printed_logic_processor', 'ae2:printed_silicon', 'minecraft:redstone', 'minecraft:redstone'])
    .itemOutputs('ae2:logic_processor')
    .time(100);

  // calculation processor
  event.recipes.oritech
    .assembler()
    .itemInputs([
      'ae2:printed_calculation_processor',
      'ae2:printed_silicon',
      'minecraft:redstone',
      'minecraft:redstone',
    ])
    .itemOutputs('ae2:calculation_processor')
    .time(100);
});
