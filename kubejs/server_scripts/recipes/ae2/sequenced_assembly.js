ServerEvents.recipes((event) => {
  event.recipes.create
    .sequenced_assembly('ae2:annihilation_core', 'ae2:logic_processor', [
      event.recipes.create.deploying('ae2:annihilation_core', [
        'ae2:annihilation_core',
        'eternal_starlight:aethersent_ingot',
      ]),
      event.recipes.create.deploying('ae2:annihilation_core', ['ae2:annihilation_core', 'minecraft:quartz']),
      event.recipes.create.deploying('ae2:annihilation_core', ['ae2:annihilation_core', 'ae2:fluix_dust']),
      event.recipes.create.pressing('ae2:annihilation_core', 'ae2:annihilation_core'),
    ])
    .transitionalItem('ae2:annihilation_core')
    .loops(1);

  event.recipes.create
    .sequenced_assembly('ae2:formation_core', 'ae2:logic_processor', [
      event.recipes.create.deploying('ae2:formation_core', [
        'ae2:formation_core',
        'eternal_starlight:golem_steel_ingot',
      ]),
      event.recipes.create.deploying('ae2:formation_core', ['ae2:formation_core', 'ae2:certus_quartz_crystal']),
      event.recipes.create.deploying('ae2:formation_core', ['ae2:formation_core', 'ae2:fluix_dust']),
      event.recipes.create.pressing('ae2:formation_core', 'ae2:formation_core'),
    ])
    .transitionalItem('ae2:formation_core')
    .loops(1);

  event.recipes.create
    .sequenced_assembly('ae2:logic_processor', 'create:precision_mechanism', [
      event.recipes.create
        .deploying('ae2:printed_logic_processor', ['ae2:printed_logic_processor', 'ae2:logic_processor_press'])
        .keepHeldItem(true),
      event.recipes.create.deploying('ae2:printed_logic_processor', [
        'ae2:printed_logic_processor',
        'create:golden_sheet',
      ]),
      event.recipes.create.deploying('ae2:printed_logic_processor', [
        'ae2:printed_logic_processor',
        'minecraft:redstone',
      ]),
      event.recipes.create.deploying('ae2:printed_logic_processor', [
        'ae2:printed_logic_processor',
        'ae2:printed_silicon',
      ]),
      event.recipes.create.pressing('ae2:printed_logic_processor', 'ae2:printed_logic_processor'),
    ])
    .transitionalItem('ae2:printed_logic_processor')
    .loops(1);

  event.recipes.create
    .sequenced_assembly('ae2:calculation_processor', 'create:precision_mechanism', [
      event.recipes.create
        .deploying('ae2:printed_calculation_processor', [
          'ae2:printed_calculation_processor',
          'ae2:calculation_processor_press',
        ])
        .keepHeldItem(true),
      event.recipes.create.deploying('ae2:printed_calculation_processor', [
        'ae2:printed_calculation_processor',
        'ae2:certus_quartz_crystal',
      ]),
      event.recipes.create.deploying('ae2:printed_calculation_processor', [
        'ae2:printed_calculation_processor',
        'minecraft:redstone',
      ]),
      event.recipes.create.deploying('ae2:printed_calculation_processor', [
        'ae2:printed_calculation_processor',
        'ae2:printed_silicon',
      ]),
      event.recipes.create.pressing('ae2:printed_calculation_processor', 'ae2:printed_calculation_processor'),
    ])
    .transitionalItem('ae2:printed_calculation_processor')
    .loops(1);

  event.recipes.create
    .sequenced_assembly('ae2:engineering_processor', 'create:precision_mechanism', [
      event.recipes.create
        .deploying('ae2:printed_engineering_processor', [
          'ae2:printed_engineering_processor',
          'ae2:engineering_processor_press',
        ])
        .keepHeldItem(true),
      event.recipes.create.deploying('ae2:printed_engineering_processor', [
        'ae2:printed_engineering_processor',
        'minecraft:diamond',
      ]),
      event.recipes.create.deploying('ae2:printed_engineering_processor', [
        'ae2:printed_engineering_processor',
        'minecraft:redstone',
      ]),
      event.recipes.create.deploying('ae2:printed_engineering_processor', [
        'ae2:printed_engineering_processor',
        'ae2:printed_silicon',
      ]),
      event.recipes.create.pressing('ae2:printed_engineering_processor', 'ae2:printed_engineering_processor'),
    ])
    .transitionalItem('ae2:printed_engineering_processor')
    .loops(1);
});
