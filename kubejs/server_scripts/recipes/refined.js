ServerEvents.recipes((event) => {
  // REMOVALS
  event.remove({
    output: [,
      'ae2:printed_engineering_processor',
      'ae2:printed_logic_processor',
      'ae2:printed_calculation_processor',
      'ae2:printed_silicon',
      'ae2:logic_processor',
      'ae2:calculation_processor',
      'ae2:engineering_processor',
      'refinedstorage:construction_core',
      'refinedstorage:destruction_core',
      'aeinfinitybooster:infinity_card',
      'refinedstorage:controller',
      'interdimensionalwirelesstransmitter:interdimensional_wireless_transmitter', 
      'refinedstorage:basic_processor',
      'refinedstorage:improved_processor',
      'refinedstorage:advanced_processor',
      'refinedstorage:quartz_enriched_iron',
      'refinedstorage:quartz_enriched_copper',
      'ae2:controller',
      'ae2:energy_acceptor',
      'arseng:source_cell_housing',
      'ae2:quartz_glass',
      'ae2:cell_component_1k',
      'ae2:cell_component_4k',
      'ae2:cell_component_16k',
      'ae2:cell_component_64k',
      'ae2:cell_component_256k',
      'ae2:spatial_cell_component_2',
      'ae2:spatial_cell_component_16',
      'ae2:spatial_cell_component_128',
      'ae2:inscriber',
      'ae2:annihilation_core',
      'ae2:formation_core',
      'ae2:fluix_glass_cable',
      'ae2:quartz_fiber',
      'ae2:quartz_vibrant_glass',
      'ae2:engineering_processor_press',
    ],
  });

// RECIPES

  //SkyStone
  event.recipes.ars_nouveau.imbuement(['minecraft:deepslate'], 'ae2:sky_stone_block', 2000, ['fdbosses:eye_of_malkuth']);
  //Storage Components
    event.recipes.create.mechanical_crafting('ae2:cell_component_1k', ['DSD', 'SCS', 'DSD',], {
    D: 'minecraft:redstone',
    S: 'ae2:certus_quartz_crystal',
    C: 'ae2:logic_processor',
  });
     event.recipes.create.mechanical_crafting('ae2:cell_component_4k', ['DED', 'SCS', 'DSD',], {
    D: 'minecraft:redstone',
    S: 'ae2:cell_component_1k',
    E: 'ae2:calculation_processor',
    C: 'ae2:quartz_glass',
  }); 
     event.recipes.create.mechanical_crafting('ae2:cell_component_16k', ['DED', 'SCS', 'DSD',], {
    D: 'minecraft:glowstone_dust',
    S: 'ae2:cell_component_4k',
    E: 'ae2:calculation_processor',
    C: 'ae2:quartz_glass',
  }); 
     event.recipes.create.mechanical_crafting('ae2:cell_component_64k', ['DED', 'SCS', 'DSD',], {
    D: 'minecraft:glowstone_dust',
    S: 'ae2:cell_component_16k',
    E: 'ae2:calculation_processor',
    C: 'ae2:quartz_glass',
  }); 
     event.recipes.create.mechanical_crafting('ae2:cell_component_256k', ['DED', 'SCS', 'DSD',], {
    D: 'ae2:sky_dust',
    S: 'ae2:cell_component_64k',
    E: 'ae2:calculation_processor',
    C: 'ae2:quartz_glass',
  }); 
    event.recipes.create.mechanical_crafting('ae2:spatial_cell_component_2', [' DFD ', 'DSLSD', 'FOCEF', 'DSLSD', ' DFD '], {
    D: 'minecraft:glowstone_dust',
    S: 'ae2:fluix_pearl',
    C: 'ae2:engineering_processor',
    L: 'ae2:quartz_glass',
    O: 'ae2:formation_core',
    E: 'ae2:annihilation_core',
    F: 'ae2:fluix_crystal',
  });
    event.recipes.create.mechanical_crafting('ae2:spatial_cell_component_16', [' DFD ', 'DSLSD', 'FOCEF', 'DSLSD', ' DFD '], {
    D: 'minecraft:glowstone_dust',
    S: 'ae2:fluix_pearl',
    C: 'ae2:engineering_processor',
    L: 'ae2:spatial_cell_component_2',
    O: 'ae2:formation_core',
    E: 'ae2:annihilation_core',
    F: 'ae2:fluix_crystal',
  });
    event.recipes.create.mechanical_crafting('ae2:spatial_cell_component_128', [' DFD ', 'DSLSD', 'FOCEF', 'DSLSD', ' DFD '], {
    D: 'minecraft:glowstone_dust',
    S: 'ae2:fluix_pearl',
    C: 'ae2:engineering_processor',
    L: 'ae2:spatial_cell_component_16',
    O: 'ae2:formation_core',
    E: 'ae2:annihilation_core',
    F: 'ae2:fluix_crystal',
  });
  
  event.shaped(Item.of('ae2:energy_acceptor'), ['AAA', 'ABA', 'AAA'], {
    A: 'create:sturdy_sheet',
    B: 'createaddition:alternator'
  });
    event.recipes.create.mechanical_crafting('ae2:controller', [' DDD ', 'DSLSD', 'DOCED', 'DSLSD', ' DDD '], {
    D: 'ae2:printed_silicon',
    S: 'eternal_starlight:unrealium_ingot',
    C: 'alexscaves:fissile_core',
    L: 'ae2:fluix_crystal',
    O: 'ae2:formation_core',
    E: 'ae2:annihilation_core',
  });
  event.recipes.create.mechanical_crafting('aeinfinitybooster:infinity_card', [' WWW ', 'WUUUW', 'WUBUW', 'WUUUW', ' WWW '], {
    W: 'ae2:wireless_booster',
    U: 'eternal_starlight:unrealium_ingot',
    B: 'mcwholidays:standing_broomstick',
  });
  
  //Processors
  event.recipes.create
    .sequenced_assembly('ae2:logic_processor', 'create:precision_mechanism', [
      event.recipes.create.deploying('ae2:printed_logic_processor', ['ae2:printed_logic_processor', 'ae2:logic_processor_press']).keepHeldItem(true),
      event.recipes.create.deploying('ae2:printed_logic_processor', ['ae2:printed_logic_processor', 'create:golden_sheet']),
      event.recipes.create.deploying('ae2:printed_logic_processor', ['ae2:printed_logic_processor', 'minecraft:redstone']),
      event.recipes.create.deploying('ae2:printed_logic_processor', ['ae2:printed_logic_processor', 'ae2:printed_silicon']),
      event.recipes.create.pressing('ae2:printed_logic_processor', 'ae2:printed_logic_processor'),
    ])
    .transitionalItem('ae2:printed_logic_processor')
    .loops(1)
    .id('seq_logic_processor');
  
    event.recipes.create
    .sequenced_assembly('ae2:calculation_processor', 'create:precision_mechanism', [
      event.recipes.create.deploying('ae2:printed_calculation_processor', ['ae2:printed_calculation_processor', 'ae2:calculation_processor_press']).keepHeldItem(true),
      event.recipes.create.deploying('ae2:printed_calculation_processor', ['ae2:printed_calculation_processor', 'ae2:certus_quartz_crystal']),
      event.recipes.create.deploying('ae2:printed_calculation_processor', ['ae2:printed_calculation_processor', 'minecraft:redstone']),
      event.recipes.create.deploying('ae2:printed_calculation_processor', ['ae2:printed_calculation_processor', 'ae2:printed_silicon']),
      event.recipes.create.pressing('ae2:printed_calculation_processor', 'ae2:printed_calculation_processor'),
    ])
    .transitionalItem('ae2:printed_calculation_processor')
    .loops(1)
    .id('seq_calculation_processor');
  
    event.recipes.create
    .sequenced_assembly('ae2:engineering_processor', 'create:precision_mechanism', [
      event.recipes.create.deploying('ae2:printed_engineering_processor', ['ae2:printed_engineering_processor', 'ae2:engineering_processor_press']).keepHeldItem(true),
      event.recipes.create.deploying('ae2:printed_engineering_processor', ['ae2:printed_engineering_processor', 'minecraft:diamond']),
      event.recipes.create.deploying('ae2:printed_engineering_processor', ['ae2:printed_engineering_processor', 'minecraft:redstone']),
      event.recipes.create.deploying('ae2:printed_engineering_processor', ['ae2:printed_engineering_processor', 'ae2:printed_silicon']),
      event.recipes.create.pressing('ae2:printed_engineering_processor', 'ae2:printed_engineering_processor'),
    ])
    .transitionalItem('ae2:printed_engineering_processor')

    .loops(1)
    .id('seq_engineering_processor');
    
  //Silicon 
  event.recipes.create
  .pressing('ae2:printed_silicon', 'ae2:silicon');
  event.recipes.create
  .pressing('ae2:printed_silicon', 'refinedstorage:silicon');
   
  // Quartz Crystals
  event.recipes.create
  .mixing('ae2:certus_quartz_crystal', ['minecraft:quartz','10xirons_spellbooks:arcane_essence']).heated();
  
  // Quartz Glass
  event.recipes.create
  .mixing('ae2:quartz_glass', ['5xae2:certus_quartz_dust','4xminecraft:glass']).heated();

  //Vibrant Quartz Glass
  event.recipes.create
  .mixing('ae2:quartz_vibrant_glass', ['2xminecraft:glowstone_dust','ae2:quartz_glass']);

  //Fiber and cables
  event.recipes.create 
  .mixing('ae2:quartz_fiber', ['3xae2:certus_quartz_dust','6xminecraft:glass']);
  event.recipes.create
  .mixing('ae2:fluix_glass_cable', ['ae2:quartz_fiber','2xae2:fluix_crystal']);

  //Cores
  event.recipes.create
    .sequenced_assembly('ae2:annihilation_core', 'ae2:logic_processor', [
      event.recipes.create.deploying('ae2:annihilation_core', ['ae2:annihilation_core', 'alexscaves:scarlet_neodymium_ingot']),
      event.recipes.create.deploying('ae2:annihilation_core', ['ae2:annihilation_core', 'minecraft:quartz']),
      event.recipes.create.deploying('ae2:annihilation_core', ['ae2:annihilation_core', 'ae2:fluix_dust']),
      event.recipes.create.pressing('ae2:annihilation_core', 'ae2:annihilation_core'),
    ])
    .transitionalItem('ae2:annihilation_core')

    .loops(1)
    .id('seq_annihilation_core');
 
  event.recipes.create
    .sequenced_assembly('ae2:formation_core', 'ae2:logic_processor', [
      event.recipes.create.deploying('ae2:formation_core', ['ae2:formation_core', 'alexscaves:azure_neodymium_ingot']),
      event.recipes.create.deploying('ae2:formation_core', ['ae2:formation_core', 'ae2:certus_quartz_crystal']),
      event.recipes.create.deploying('ae2:formation_core', ['ae2:formation_core', 'ae2:fluix_dust']),
      event.recipes.create.pressing('ae2:formation_core', 'ae2:formation_core'),
    ])
    .transitionalItem('ae2:formation_core')

    .loops(1)
    .id('seq_formation_core');

  //Source Cell Housing
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['malum:hallowed_gold_ingot', 'malum:hallowed_gold_ingot', 'malum:hallowed_gold_ingot', 'malum:hallowed_gold_ingot', 'ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'ars_nouveau:manipulation_essence', 'ars_nouveau:manipulation_essence'],
    'ae2:item_cell_housing',
    'arseng:source_cell_housing',
    10000,
  );

  //Press's
  event.recipes.create.deploying(
    'ae2:engineering_processor_press', [ 'minecraft:iron_block','ae2:engineering_processor_press']
  ).keepHeldItem(true);
  event.recipes.create.deploying(
    'ae2:calculation_processor_press', [ 'minecraft:iron_block','ae2:calculation_processor_press']
  ).keepHeldItem(true);
  event.recipes.create.deploying(
    'ae2:logic_processor_press', [ 'minecraft:iron_block','ae2:logic_processor_press']
  ).keepHeldItem(true);


//Conversions
    // Core
  event.shapeless(
    Item.of('ae2:wireless_terminal'), // arg 1: output
    ['refinedstorage:wireless_grid']); // arg 2: array of inputs),  
  event.shapeless(
    Item.of('ae2:wireless_crafting_terminal'), // arg 1: output
    ['refinedstorage_quartz_arsenal:wireless_crafting_grid']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:controller'), // arg 1: output
    ['refinedstorage:controller']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:fluix_glass_cable'), // arg 1: output
    ['refinedstorage:cable']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('aeinfinitybooster:infinity_card'), // arg 1: output
    ['interdimensionalwirelesstransmitter:interdimensional_wireless_transmitter']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:energy_acceptor'), // output: 1 energy acceptors
    ['refinedtypes:network_energizer']); // input: 1 network energizer
  event.shapeless(
    Item.of('ae2:molecular_assembler'), // output: 1 energy cell
    ['refinedstorage:autocrafter']); // input: 1 network energizer
   
    //AE2
    
    //Grids   
  event.shapeless(
    Item.of('ae2:crafting_monitor'), // arg 1: output
    ['refinedstorage:autocrafting_monitor']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:pattern_encoding_terminal'), // arg 1: output
    ['refinedstorage:pattern_grid']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:terminal'), // arg 1: output
    ['refinedstorage:grid']); // arg 2: array of inputs), 
  event.shapeless(
    Item.of('ae2:crafting_terminal'), // arg 1: output
    ['refinedstorage:crafting_grid']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:terminal'), // arg 1: output
    ['refinedstorage:grid']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:wireless_access_point'), // arg 1: output
    ['refinedstorage:wireless_transmitter']); // arg 2: array of inputs),
    
    //Busses
  event.shapeless(
    Item.of('ae2:import_bus'), // arg 1: output
    ['refinedstorage:importer']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:export_bus'), // arg 1: output
    ['refinedstorage:exporter']); // arg 2: array of inputsS), 
  event.shapeless(
    Item.of('ae2:storage_bus'), // arg 1: output
    ['refinedstorage:external_storage']); // arg 2: array of inputs),  
  
    // Housing
  event.shapeless(
    Item.of('ae2:item_cell_housing'), // arg 1: output
    ['refinedstorage:storage_housing']); // arg 2: array of inputs),

    // Storage Components 
  event.shapeless(
    Item.of('ae2:cell_component_1k'), // arg 1: output
    ['refinedstorage:1k_storage_part']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:cell_component_4k'), // arg 1: output
    ['refinedstorage:4k_storage_part']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:cell_component_16k'), // arg 1: output
    ['refinedstorage:16k_storage_part']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:cell_component_64k'), // arg 1: output
    ['refinedstorage:64k_storage_part']); // arg 2: array of inputs),

    // Items Storage Cells
    event.shapeless(
    Item.of('ae2:item_storage_cell_1k'), // arg 1: output
    ['refinedstorage:1k_storage_disk']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:item_storage_cell_4k'), // arg 1: outputS
    ['refinedstorage:4k_storage_disk']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:item_storage_cell_16k'), // arg 1: output
    ['refinedstorage:16k_storage_disk']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:item_storage_cell_64k'), // arg 1: output
    ['refinedstorage:64k_storage_disk']); // arg 2: array of inputs),

    // Fluids Storage Cells
  event.shapeless(
    Item.of('ae2:fluid_storage_cell_1k'), // arg 1: output
    ['refinedstorage:64b_fluid_storage_disk']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:fluid_storage_cell_4k'), // arg 1: output
    ['refinedstorage:256b_fluid_storage_disk']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:fluid_storage_cell_16k'), // arg 1: output
    ['refinedstorage:1024b_fluid_storage_disk']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:fluid_storage_cell_64k'), // arg 1: output
    ['refinedstorage:4096b_fluid_storage_disk']); // arg 2: array of inputs),

    //Processors
  event.shapeless(
    Item.of('ae2:logic_processor'), // arg 1: output
    ['refinedstorage:improved_processor']); // arg 2: array of inputs),
  event.shapeless(
    Item.of('ae2:calculation_processor'), // arg 1: output
    ['refinedstorage:basic_processor']); // arg 2: array of inputs),       
  event.shapeless(
    Item.of('ae2:engineering_processor'), // arg 1: output
    ['refinedstorage:advanced_processor']); // arg 2: array of inputs),   
    //upgrade cards
  event.shapeless(
    Item.of('ae2:speed_card'), // arg 1: output
    ['refinedstorage:speed_upgrade']); // arg 2: array of inputs),

    //Source Storage
  event.shapeless(
    Item.of('arseng:source_storage_cell_1k'), // arg 1: output
    [ 'refinedtypes:64b_source_storage_disk']);
  event.shapeless(
    Item.of('arseng:source_storage_cell_4k'), // arg 1: output
    [ 'refinedtypes:256b_source_storage_disk']);
   event.shapeless(
    Item.of('arseng:source_storage_cell_16k'), // arg 1: output
    [ 'refinedtypes:1024b_source_storage_disk']);
   event.shapeless(
    Item.of('arseng:source_storage_cell_64k'), // arg 1: output
    [ 'refinedtypes:8192b_source_storage_disk']);
   event.shapeless(
    Item.of('arseng:source_storage_cell_64k'), // arg 1: output
    [ 'refinedtypes:8388608b_source_storage_disk']);
   event.shapeless(
    Item.of('arseng:source_storage_cell_64k'), // arg 1: output
    [ 'refinedtypes:1048576b_source_storage_disk']);
   event.shapeless(
    Item.of('arseng:source_storage_cell_64k'), // arg 1: output
    [ 'refinedtypes:262144b_source_storage_disk']);
   event.shapeless(
    Item.of('arseng:source_storage_cell_64k'), // arg 1: output
    [ 'refinedtypes:65536b_source_storage_disk']);              


});
