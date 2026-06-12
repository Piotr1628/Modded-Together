RecipeViewerEvents.removeCategories((event) => {
  event.remove([
    'ars_nouveau:apparatus_enchanting',
    'emi:fuel',
    'alex_caves:nuclear_furnance',
    'tombstone:combine',
    'alshanex_familiars:shrinking_station',
    'create:automatic_shapeless',
    'create:automatic_packing',
    'create:automatic_shaped',
    'ftbquests:loot_crate',
    'emi:grinding',
    'oritech:bio_generator',
    'oritech:fuel_generator',
    'oritech:lava_generator',
    'oritech:steam_engine',
  ]);
});

RecipeViewerEvents.removeEntriesCompletely('item', (event) => {
  event.remove(['oritech:still_silicon_wash_bucket', 'oritech:still_oil_bucket']);
});
RecipeViewerEvents.removeEntriesCompletely('fluid', (event) => {
  event.remove(['oritech:silicon_wash', 'oritech:oil']);
});
