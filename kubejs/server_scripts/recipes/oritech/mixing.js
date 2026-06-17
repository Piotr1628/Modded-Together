ServerEvents.recipes((event) => {
  event.recipes.create
    .mixing('oritech:adamant_ingot', ['eternal_starlight:deepsilver_ingot', '4xae2:certus_quartz_dust'])
    .superheated();

  event.recipes.create
    .mixing('unify:electrum_ingot', ['unify:silver_ingot', 'minecraft:gold_ingot', 'minecraft:redstone'])
    .heated();

  event.recipes.create.mixing(Fluid.of('oritech:still_silicon_wash', 250), [
    Fluid.of('minecraft:water', 250),
    Fluid.of('createdieselgenerators:ethanol', 250),
  ]);
  event.recipes.create.mixing('oritech:silicon', [Fluid.of('oritech:still_silicon_wash', 1000), 'oritech:raw_silicon']);
});
