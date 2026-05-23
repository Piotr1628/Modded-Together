RecipeViewerEvents.removeCategories((event) => {
  event.remove(['ars_nouveau:apparatus_enchanting', 'emi:fuel', 'alex_caves:nuclear_furnance', 'tombstone:combine', 'alshanex_familiars:shrinking_station', 'create:automatic_shapeless', 'create:automatic_packing', 'create:automatic_shaped', 'ftbquests:loot_crate', 'emi:grinding']);
});

RecipeViewerEvents.removeEntriesCompletely('item', (event) => {});
