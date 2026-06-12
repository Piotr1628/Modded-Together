ServerEvents.recipes((event) => {
  event.recipes.create
    .mixing('oritech:adamant_ingot', ['eternal_starlight:deepsilver_ingot', 'ae2:certus_quartz_dust'])
    .superheated();

  event.recipes.create
    .mixing('unify:electrum_ingot', ['unify:silver_ingot', 'minecraft:gold_ingot', 'minecraft:redstone'])
    .superheated();
});
