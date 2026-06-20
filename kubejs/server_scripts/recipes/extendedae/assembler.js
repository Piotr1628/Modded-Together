ServerEvents.recipes((event) => {
  event.recipes.oritech
    .assembler()
    .itemInputs([
      'extendedae:concurrent_processor_print',
      'ae2:printed_silicon',
      'create_connected:control_chip',
      'minecraft:redstone',
    ])
    .itemOutputs('extendedae:concurrent_processor')
    .time(400);
});
