ServerEvents.recipes((event) => {
  event.replaceInput({ id: 'create:crafting/materials/sand_paper' }, 'minecraft:sand', 'minecraft:sandstone');

  event.replaceInput({ mod: 'eidolon_repraised' }, 'eidolon_repraised:arcane_gold_ingot', 'malum:hallowed_gold_ingot');

  event.replaceInput(
    { mod: 'eidolon_repraised' },
    'eidolon_repraised:arcane_gold_nugget',
    'malum:hallowed_gold_nugget',
  );

  event.replaceInput(
    { mod: 'eidolon_repraised' },
    'eidolon_repraised:arcane_gold_block',
    'malum:block_of_hallowed_gold',
  );
  event.replaceInput({ mod: 'farmersdelight' }, 'minecraft:egg', '#c:eggs');

  event.replaceInput({ mod: 'mynethersdelight' }, 'minecraft:egg', '#c:eggs');

  event.replaceInput({ id: 'malum:malignant_pewter_ingot' }, '#c:ingots/iron', 'eidolon_repraised:pewter_ingot');

  event.replaceInput({ mod: 'scguns' }, 'scguns:niter_dust', 'eternal_starlight:saltpeter_powder');

  event.replaceInput({}, 'create:dough', '#c:doughs/wheat');

  event.replaceInput({ output: 'sophisticatedstorage:storage_link' }, 'minecraft:ender_pearl', 'create:transmitter');
});
