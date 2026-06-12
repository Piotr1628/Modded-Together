ServerEvents.recipes((event) => {
  event.shaped('irons_spellbooks:inscription_table', ['  B', 'WWW', 'F F'], {
    B: 'minecraft:enchanted_book',
    W: 'malum:runewood_planks_slab',
    F: 'malum:runewood_planks_fence',
  });

  event.shaped('irons_spellbooks:iron_spell_book', [' S ', 'SBS', ' S '], {
    B: 'irons_spellbooks:copper_spell_book',
    S: 'unify:iron_sheet',
  });

  event.shaped('irons_spellbooks:portal_frame', ['ABA', 'C C', 'C C'], {
    C: 'irons_spellbooks:arcane_ingot',
    B: 'waystones:warp_dust',
    A: 'irons_spellbooks:mithril_ingot',
  });
});
