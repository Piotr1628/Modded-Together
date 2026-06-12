ServerEvents.recipes((event) => {
  event.recipes.ars_nouveau.imbuement(['#c:gems/source'], 'kubejs:ice_essence', 2000, [
    'malum:aqueous_spirit',
    'irons_spellbooks:icy_fang',
    'irons_spellbooks:frozen_bone',
  ]);

  event.recipes.ars_nouveau.imbuement(['#c:gems/source'], 'ars_nouveau:abjuration_essence', 2000, [
    'malum:sacred_spirit',
    'minecraft:fermented_spider_eye',
    'supplementaries:soap',
  ]);

  event.recipes.ars_nouveau.imbuement(['#c:gems/source'], 'ars_nouveau:conjuration_essence', 2000, [
    'malum:wicked_spirit',
    'ars_nouveau:wilden_horn',
    'eidolon_repraised:offering_incense',
  ]);

  event.recipes.ars_nouveau.imbuement(['#c:gems/source'], 'ars_nouveau:manipulation_essence', 2000, [
    'malum:arcane_spirit',
    'minecraft:stone_button',
    'minecraft:clock',
  ]);

  event.recipes.ars_nouveau.imbuement(['#c:gems/source'], 'ars_nouveau:water_essence', 2000, [
    'malum:aqueous_spirit',
    'minecraft:water_bucket',
    'minecraft:seagrass',
  ]);

  event.recipes.ars_nouveau.imbuement(['#c:gems/source'], 'ars_nouveau:fire_essence', 2000, [
    'malum:infernal_spirit',
    'mythsandlegends:fire_heart',
    'minecraft:gunpowder',
  ]);

  event.recipes.ars_nouveau.imbuement(['#c:gems/source'], 'ars_nouveau:earth_essence', 2000, [
    'malum:earthen_spirit',
    '#c:ingots/iron',
    'minecraft:dirt',
  ]);

  event.recipes.ars_nouveau.imbuement(['#c:gems/source'], 'ars_nouveau:air_essence', 2000, [
    'malum:aerial_spirit',
    'minecraft:feather',
    '#minecraft:arrows',
  ]);

  event.recipes.ars_nouveau.imbuement(['#c:gems/source'], 'ars_elemental:anima_essence', 3000, [
    'malum:eldritch_spirit',
    'eidolon_repraised:bloodlust_incense',
    'irons_spellbooks:blood_vial',
  ]);

  event.recipes.ars_nouveau.imbuement(['#c:gems/source'], 'irons_spellbooks:arcane_essence', 3000, [
    'minecraft:nether_star',
    'malum:arcane_spirit',
    'malum:eldritch_spirit',
  ]);

  event.recipes.ars_nouveau.imbuement(['#c:gems/source'], 'irons_spellbooks:cinder_essence', 3000, [
    'minecraft:netherite_ingot',
    'malum:wicked_spirit',
    'malum:infernal_spirit',
  ]);
});
