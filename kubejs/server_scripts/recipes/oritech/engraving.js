ServerEvents.recipes((event) => {
  event.recipes.oritech
    .atomic_forge()
    .itemInputs(['oritech:processing_unit', 'ae2:printed_silicon', 'ae2:printed_silicon'])
    .itemOutputs('oritech:advanced_computing_engine')
    .time(200);
});
