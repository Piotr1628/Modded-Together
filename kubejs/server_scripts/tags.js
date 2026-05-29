// ITEMS
ServerEvents.tags('item', (event) => {
  event.add('hazentouvelib:focus/radiance_focus', 'eternal_starlight:starlit_diamond');
  event.add('mynethersdelight:boiled_egg_candidate', '#c:eggs');
  event.add('c:eggs', [
    'reanimal:kiwi_egg',
    'reanimal:ostrich_egg',
    'reanimal:pigeon_egg',
    'reanimal:vulture_egg',
    'reanimal:penguin_egg',
    'reanimal:crocodile_egg',
  ]);
  event.add('nomoremagicchoices:skill_weapon', '#minecraft:enchantable/weapon');
});

// BLOCKS
ServerEvents.tags('block', (event) => {
  event.add('irons_spellbooks:spectral_hammer_mineable', ['#eternal_starlight:base_stone_starlight']);
});

// EMNTITIES
ServerEvents.tags('entity_type', (event) => {
  event.add('ars_nouveau:bubble_blacklist', [
    'create:contraption',
    'create:stationary_contraption',
    'create:gantry_contraption',
    'create:carriage_contraption',
  ]);
  event.add('iceandfire:immune_to_gorgon_stone', []);
  event
    .get('ars_nouveau:jar_blacklist')
    .removeAll()
    .add([/ars_nouveau/, /cataclysm/, /irons_spellbooks/]);
});
