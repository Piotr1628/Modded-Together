ServerEvents.recipes((event) => {
  event.recipes.oritech
    .assembler()
    .itemInputs([
      'extendedae:concurrent_processor_print',
      'ae2:printed_silicon',
      'minecraft:redstone',
      'minecraft:redstone',
    ])
    .itemOutputs('extendedae:concurrent_processor')
    .time(100);

  event.recipes.oritech
    .assembler()
    .itemInputs(['minecraft:apple', 'minecraft:cake', 'minecraft:pumpkin_pie', 'supplementaries:pancake'])
    .itemOutputs('minecraft:golden_apple')
    .time(100);
});
