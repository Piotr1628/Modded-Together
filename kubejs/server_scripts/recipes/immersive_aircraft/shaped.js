ServerEvents.recipes((event) => {
  event.shaped('immersive_aircraft:hull', ['   ', 'ABA', 'ABA'], {
    B: 'minecraft:iron_ingot',
    A: 'create:andesite_casing',
  });

  event.shaped('immersive_aircraft:sail', ['   ', 'AAA', 'AAA'], {
    A: 'create:white_sail',
  });

  event.shaped('immersive_aircraft:propeller', [' A ', 'ABA', ' A '], {
    A: 'create:iron_sheet',
    B: 'create:propeller',
  });

  event.shaped('immersive_aircraft:boiler', [' A ', ' B ', ' C '], {
    A: 'create:steam_engine',
    C: 'create:blaze_burner',
    B: 'create:fluid_tank',
  });

  event.shaped('immersive_aircraft:engine', ['   ', 'ABA', 'CDC'], {
    A: 'create:brass_sheet',
    C: 'create:sturdy_sheet',
    B: 'create:precision_mechanism',
    D: 'immersive_aircraft:boiler',
  });

  event.shaped('immersive_aircraft:quadrocopter', ['ABA', ' C ', 'ADA'], {
    C: '#minecraft:wool',
    B: 'create:andesite_casing',
    D: 'immersive_aircraft:boiler',
    A: 'create:propeller',
  });

  event.shaped('immersive_aircraft:enhanced_propeller', [' A ', 'ABA', ' A '], {
    A: 'create:brass_sheet',
    B: 'create:brass_ingot',
  });

  event.shaped('immersive_aircraft:steel_boiler', ['ABA', 'ABA', 'ABA'], {
    A: 'create:iron_sheet',
    B: 'create:fluid_tank',
  });

  event.shaped('immersive_aircraft:gyroscope', [' AA', ' B ', '   '], {
    A: 'create:electron_tube',
    B: 'minecraft:compass',
  });

  event.shaped('immersive_aircraft:hull_reinforcement', ['   ', 'ABA', '   '], {
    B: 'immersive_aircraft:hull',
    A: 'create:iron_sheet',
  });

  event.shaped('immersive_aircraft:improved_landing_gear', ['AB ', 'C  ', '   '], {
    B: 'minecraft:iron_ingot',
    A: 'create:iron_sheet',
    C: 'create:belt_connector',
  });

  event.shaped('immersive_aircraft:sturdy_pipes', ['AAB', 'BBB', 'BAA'], {
    B: 'create:fluid_pipe',
    A: 'create:iron_sheet',
  });

  event.shaped('immersive_aircraft:nether_engine', ['   ', 'ABA', 'CDC'], {
    C: 'create:sturdy_sheet',
    A: 'create:iron_sheet',
    D: 'immersive_aircraft:boiler',
    B: 'minecraft:lava_bucket',
  });

  event.shaped('immersive_aircraft:eco_engine', ['   ', 'ABA', 'CDC'], {
    A: 'create:iron_sheet',
    C: 'create:copper_sheet',
    D: 'immersive_aircraft:boiler',
    B: 'minecraft:water_bucket',
  });

  event.shaped('immersive_aircraft:industrial_gears', [' AB', 'C A', 'BC '], {
    C: 'create:iron_sheet',
    A: 'create:copper_sheet',
    B: 'create:cogwheel',
  });
});
