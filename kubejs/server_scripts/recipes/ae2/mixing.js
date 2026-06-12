ServerEvents.recipes((event) => {
  event.recipes.create.mixing('ae2:quartz_glass', ['5x ae2:certus_quartz_dust', '4x minecraft:glass']).heated();
  event.recipes.create.mixing('ae2:quartz_vibrant_glass', ['2x minecraft:glowstone_dust', 'ae2:quartz_glass']);
  event.recipes.create.mixing('ae2:quartz_fiber', ['3x ae2:certus_quartz_dust', '6x minecraft:glass']);
  event.recipes.create.mixing('ae2:fluix_glass_cable', ['ae2:quartz_fiber', '2x ae2:fluix_crystal']);
});
