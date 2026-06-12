ServerEvents.recipes((event) => {
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['iceandfire:fire_dragon_blood', 'malum:warp_flux', 'eternal_starlight:starlit_diamond'],
    'eternal_starlight:starfire',
    'iceandfire:summoning_crystal_fire',
    1000,
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    ['iceandfire:ice_dragon_blood', 'malum:warp_flux', 'eternal_starlight:starlit_diamond'],
    'iceandfire:sapphire_gem',
    'iceandfire:summoning_crystal_ice',
    1000,
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    ['iceandfire:lightning_dragon_blood', 'malum:warp_flux', 'eternal_starlight:starlit_diamond'],
    'minecraft:amethyst_shard',
    'iceandfire:summoning_crystal_lightning',
    1000,
  );
});
