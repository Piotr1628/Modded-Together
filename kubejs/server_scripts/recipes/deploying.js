ServerEvents.recipes((event) => {
  //AE2
  //Press's
  event.recipes.create
    .deploying("ae2:engineering_processor_press", [
      "minecraft:iron_block",
      "ae2:engineering_processor_press",
    ])
    .keepHeldItem(true);
  event.recipes.create
    .deploying("ae2:calculation_processor_press", [
      "minecraft:iron_block",
      "ae2:calculation_processor_press",
    ])
    .keepHeldItem(true);
  event.recipes.create
    .deploying("ae2:logic_processor_press", [
      "minecraft:iron_block",
      "ae2:logic_processor_press",
    ])
    .keepHeldItem(true);
      event.recipes.create
    .deploying("ae2:silicon_press", [
      "minecraft:iron_block",
      "ae2:silicon_press",
    ])
    .keepHeldItem(true);
});
