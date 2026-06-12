ServerEvents.recipes((event) => {
  event.recipes.create
    .sequenced_assembly('extendedae:concurrent_processor', 'create:precision_mechanism', [
      event.recipes.create
        .deploying('extendedae:concurrent_processor_print', [
          'extendedae:concurrent_processor_print',
          'extendedae:concurrent_processor_press',
        ])
        .keepHeldItem(true),
      event.recipes.create.deploying('extendedae:concurrent_processor_print', [
        'extendedae:concurrent_processor_print',
        'extendedae:entro_crystal',
      ]),
      event.recipes.create.deploying('extendedae:concurrent_processor_print', [
        'extendedae:concurrent_processor_print',
        'minecraft:redstone',
      ]),
      event.recipes.create.deploying('extendedae:concurrent_processor_print', [
        'extendedae:concurrent_processor_print',
        'ae2:printed_silicon',
      ]),
      event.recipes.create.pressing('extendedae:concurrent_processor_print', 'extendedae:concurrent_processor_print'),
    ])
    .transitionalItem('extendedae:concurrent_processor_print')
    .loops(1);
});
