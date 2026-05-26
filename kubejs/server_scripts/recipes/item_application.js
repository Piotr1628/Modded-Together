ServerEvents.recipes((event) => {
  //Apotheosis
  event.recipes.create.item_application("apotheosis:reforging_table", [
    "apotheosis:simple_reforging_table",
    "bosses_of_mass_destruction:obsidian_heart",
  ]);
  //Create
  event.recipes.create.item_application("create:railway_casing", [
    "minecraft:deepslate",
    "unify:gold_sheet",
  ]);
  event.recipes.create.item_application("sophisticatedstorage:controller", [
    "create:andesite_casing",
    "sophisticatedstorage:basic_tier_upgrade",
  ]);
  //random
  event.recipes.create.item_application("transmog:transmogrification_table", [
    "minecraft:amethyst_block",
    "royalvariations:royal_ender_pearl",
  ]);
});
//Ice anmd Fire
ServerEvents.recipes(addDragonforgeRecipes);
ServerEvents.recipes((event) => {
  event.recipes.create.item_application("iceandfire:dragonforge_fire_input", [
    "iceandfire:dragonforge_fire_brick",
    "malum:anomalous_design",
  ]);
  event.recipes.create.item_application("iceandfire:dragonforge_ice_input", [
    "iceandfire:dragonforge_ice_brick",
    "malum:anomalous_design",
  ]);
  event.recipes.create.item_application(
    "iceandfire:dragonforge_lightning_input",
    ["iceandfire:dragonforge_lightning_brick", "malum:anomalous_design"],
  );
});
