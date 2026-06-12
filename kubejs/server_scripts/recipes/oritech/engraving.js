ServerEvents.recipes((event) => {
  // adds a recipe that converts a glass block, and a potato into 2 sand
  // requires 40 * 1024 = 40960 FE by default
  // could use .timeInSeconds(2) alternatively
  event.recipes.oritech
    .atomic_forge()
    .itemInputs(['oritech:processing_unit', 'ae2:printed_silicon', 'ae2:printed_silicon'])
    .itemOutputs('oritech:advanced_computing_engine')
    .time(200);
});
