ServerEvents.recipes((event) => {
  AE2Recipes.inscriberPress(event, 'tfmg:silicon_ingot', 'ae2:silicon_press', 'ae2:printed_silicon');
  AE2Recipes.inscriberPress(event, 'unify:electrum_ingot', 'ae2:logic_processor_press', 'ae2:printed_logic_processor');
});
