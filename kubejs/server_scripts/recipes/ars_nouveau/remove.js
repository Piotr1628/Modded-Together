ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'ars_nouveau:imbuement_water_essence' },
    { id: 'ars_nouveau:imbuement_manipulation_essence' },
    { id: 'ars_nouveau:imbuement_abjuration_essence' },
    { id: 'ars_nouveau:imbuement_conjuration_essence' },
    { id: 'ars_nouveau:imbuement_fire_essence' },
    { id: 'ars_nouveau:imbuement_air_essence' },
    { id: 'ars_nouveau:imbuement_earth_essence' },
    { id: 'ars_nouveau:arcane_pedestal' },
    { id: 'ars_nouveau:arcane_core' },
    { id: 'ars_nouveau:enchanting_apparatus' },
    { id: 'ars_nouveau:imbuement_chamber' },
    { id: 'ars_nouveau:source_jar' },
    { id: 'ars_nouveau:warp_scroll' },
    { id: 'ars_nouveau:stable_warp_scroll' },
    { id: 'ars_nouveau:dull_trinket' },
    { id: 'ars_nouveau:amulet_of_mana_boost' },
    { id: 'ars_nouveau:amulet_of_mana_regen' },
    { id: 'ars_nouveau:mundane_belt' },
    { id: 'ars_nouveau:ring_of_potential' },
    { id: 'ars_nouveau:drygmy_charm' },
    { id: 'ars_nouveau:novice_spell_book' },
    { id: 'ars_nouveau:novice_spellbook_alt' },
    { id: 'ars_nouveau:archmage_book_upgrade' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
