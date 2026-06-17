ServerEvents.recipes((event) => {
  event.recipes.oritech
    .foundry()
    .itemInputs(['ae2:certus_quartz_dust', 'eternal_starlight:deepsilver_ingot'])
    .itemOutputs('oritech:adamant_ingot')
    .time(400);
  event.recipes.oritech
    .foundry()
    .itemInputs(['unify:silver_ingot', 'minecraft:gold_ingot'])
    .itemOutputs('unify:electrum_ingot')
    .time(200);
  event.recipes.oritech
    .foundry()
    .itemInputs(['minecraft:iron_ingot', 'oritech:coal_dust'])
    .itemOutputs('unify:steel_ingot')
    .time(1200);
  event.recipes.oritech
    .foundry()
    .itemInputs(['oritech:quartz_dust', 'oritech:coal_dust'])
    .itemOutputs('oritech:raw_silicon')
    .time(200);
});
