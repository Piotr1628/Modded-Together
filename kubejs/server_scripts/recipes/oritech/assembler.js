ServerEvents.recipes((event) => {
  event.recipes.oritech
    .assembler()
    .itemInputs([
      'ae2:engineering_processor',
      'ae2:logic_processor',
      'ae2:calculation_processor',
      'extendedae:concurrent_processor',
    ])
    .itemOutputs('oritech:processing_unit')
    .time(200);
});
