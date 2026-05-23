// ITEMS
ServerEvents.tags('item', (event) => {
  event.add('hazennstuff:focus/shadow_focus', 'alexscaves:pure_darkness');
  event.add('mynethersdelight:boiled_egg_candidate', '#c:eggs');
  event.add('c:eggs', ['reanimal:kiwi_egg', 'reanimal:ostrich_egg', 'reanimal:pigeon_egg', 'reanimal:vulture_egg', 'reanimal:penguin_egg', 'reanimal:crocodile_egg']);
  event.add('nomoremagicchoices:skill_weapon', '#minecraft:enchantable/weapon');
});

// BLOCKS
ServerEvents.tags('block', (event) => {
  event.add('irons_spellbooks:spectral_hammer_mineable', ['#eternal_starlight:base_stone_starlight', 'alexscaves:galena', 'alexscaves:cake_layer', '#iceandfire:charred_blocks', 'alexscaves:radrock', 'alexscaves:limestone']);
});

// EMNTITIES
ServerEvents.tags('entity_type', (event) => {
  event.add('ars_nouveau:bubble_blacklist', ['create:contraption', 'create:stationary_contraption', 'create:gantry_contraption', 'create:carriage_contraption']);
  event.add('iceandfire:immune_to_gorgon_stone', []);
});
