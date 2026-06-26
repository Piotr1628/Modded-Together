ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'irons_spellbooks:ender_rune' },
    { id: 'irons_spellbooks:evocation_rune' },
    { id: 'irons_spellbooks:fire_rune' },
    { id: 'irons_spellbooks:holy_rune' },
    { id: 'irons_spellbooks:ice_rune' },
    { id: 'irons_spellbooks:lightning_rune' },
    { id: 'irons_spellbooks:nature_rune' },
    { id: 'irons_spellbooks:blood_rune' },
    { id: 'irons_spellbooks:shriving_stone' },
    { id: 'irons_spellbooks:iron_spell_book' },
    { id: 'irons_spellbooks:portal_frame' },
    { id: 'irons_spellbooks:inscription_table' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
