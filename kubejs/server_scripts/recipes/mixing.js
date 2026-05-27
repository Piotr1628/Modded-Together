ServerEvents.recipes((event) => {
  //AE2
  //Quartz Glass
  event.recipes.create.mixing('ae2:quartz_glass', ['5xae2:certus_quartz_dust', '4xminecraft:glass']).heated();
  //Vibrant Quartz Glass
  event.recipes.create.mixing('ae2:quartz_vibrant_glass', ['2xminecraft:glowstone_dust', 'ae2:quartz_glass']);
  //Fiber and cables
  event.recipes.create.mixing('ae2:quartz_fiber', ['3xae2:certus_quartz_dust', '6xminecraft:glass']);
  event.recipes.create.mixing('ae2:fluix_glass_cable', ['ae2:quartz_fiber', '2xae2:fluix_crystal']);
  event.recipes.create.mixing('extendedae:entro_seed', ['3xminecraft:redstone', '3xoritech:platinum_dust', '3xae2:ender_dust', 'ae2:sky_dust']);
  //Irons Spells
  event.recipes.create.mixing(Fluid.of('irons_spellbooks:ice_venom', 250), [Fluid.of('eternal_starlight:ether', 1000), 'minecraft:spider_eye']).heated();
  //Oritech
  event.recipes.create.mixing('oritech:adamant_ingot', ['eternal_starlight:deepsilver_ingot', 'ae2:certus_quartz_dust']).superheated();
});
