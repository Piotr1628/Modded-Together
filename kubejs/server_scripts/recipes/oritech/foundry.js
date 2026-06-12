ServerEvents.recipes((event) => {
  event.recipes.oritech
    .foundry()
    .itemInputs(['ae2:certus_quartz_dust', 'eternal_starlight:deepsilver_ingot'])
    .itemOutputs('oritech:adamant_ingot')
    .time(60);
  event.recipes.oritech
    .foundry()
    .itemInputs(['unify:silver_ingot', 'minecraft:gold_ingot'])
    .itemOutputs('unify:electrum_ingot')
    .time(60);
});
