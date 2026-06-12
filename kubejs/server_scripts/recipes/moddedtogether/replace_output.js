ServerEvents.recipes((event) => {
  event.replaceOutput({ mod: 'eidolon_repraised' }, 'eidolon_repraised:arcane_gold_ingot', 'malum:hallowed_gold_ingot');

  event.replaceOutput(
    { mod: 'eidolon_repraised' },
    'eidolon_repraised:arcane_gold_nugget',
    'malum:hallowed_gold_nugget',
  );

  event.replaceOutput(
    { mod: 'eidolon_repraised' },
    'eidolon_repraised:arcane_gold_block',
    'malum:block_of_hallowed_gold',
  );

  event.replaceOutput({ mod: 'scguns' }, 'scguns:niter_dust', 'eternal_starlight:saltpeter_powder');
});
