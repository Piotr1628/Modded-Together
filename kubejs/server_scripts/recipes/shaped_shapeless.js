ServerEvents.recipes((event) => {
  // Oritech
  event.shapeless('9xoritech:adamant_ingot', ['oritech:adamant_block']);
  //Apotheosis
  event.shaped('4x apothic_enchanting:scrap_tome', ['IBI', 'BAB', 'IBI'], {
    B: 'minecraft:book',
    I: 'minecraft:netherite_ingot',
    A: 'minecraft:anvil',
  });
  event.shaped(Item.of('apotheosis:simple_reforging_table', 1), [' H ', 'SCS', 'PPP'], {
    H: 'createdieselgenerators:hammer',
    C: 'cataclysm:storm_eye',
    S: 'minecraft:stone',
    P: 'malum:runewood_planks',
  });
  //AE2
  event.shaped(Item.of('ae2:energy_acceptor'), ['AAA', 'ABA', 'AAA'], {
    A: 'create:sturdy_sheet',
    B: 'createaddition:alternator',
  });

  //eidolon
  event.shaped('eidolon_repraised:worktable', ['CCC', 'PSP', 'PPP'], {
    C: 'minecraft:purple_carpet',
    P: 'malum:runewood_planks',
    S: 'malum:refined_soulstone',
  });

  //Immersive Aircraft
  event.shaped(Item.of('immersive_aircraft:hull'), ['   ', 'ABA', 'ABA'], {
    B: 'minecraft:iron_ingot',
    A: 'create:andesite_casing',
  });
  event.shaped(Item.of('immersive_aircraft:sail'), ['   ', 'AAA', 'AAA'], {
    A: 'create:white_sail',
  });
  event.shaped(Item.of('immersive_aircraft:propeller'), [' A ', 'ABA', ' A '], {
    A: 'create:iron_sheet',
    B: 'create:propeller',
  });
  event.shaped(Item.of('immersive_aircraft:boiler'), [' A ', ' B ', ' C '], {
    A: 'create:steam_engine',
    C: 'create:blaze_burner',
    B: 'create:fluid_tank',
  });
  event.shaped(Item.of('immersive_aircraft:engine'), ['   ', 'ABA', 'CDC'], {
    A: 'create:brass_sheet',
    C: 'create:sturdy_sheet',
    B: 'create:precision_mechanism',
    D: 'immersive_aircraft:boiler',
  });
  event.shaped(Item.of('immersive_aircraft:gyrodyne'), [' A ', 'BCB', 'DED'], {
    D: 'immersive_aircraft:hull',
    B: 'immersive_aircraft:sail',
    C: 'create:precision_mechanism',
    E: '#create:seats',
    A: 'immersive_aircraft:propeller',
  });
  event.shaped(Item.of('immersive_aircraft:quadrocopter'), ['ABA', ' C ', 'ADA'], {
    C: '#minecraft:wool',
    B: 'create:andesite_casing',
    D: 'immersive_aircraft:boiler',
    A: 'create:propeller',
  });
  event.shaped(Item.of('immersive_aircraft:enhanced_propeller'), [' A ', 'ABA', ' A '], {
    A: 'create:brass_sheet',
    B: 'create:brass_ingot',
  });
  event.shaped(Item.of('immersive_aircraft:steel_boiler'), ['ABA', 'ABA', 'ABA'], {
    A: 'create:iron_sheet',
    B: 'create:fluid_tank',
  });
  event.shaped(Item.of('immersive_aircraft:gyroscope'), [' AA', ' B ', '   '], {
    A: 'create:electron_tube',
    B: 'minecraft:compass',
  });
  event.shaped(Item.of('immersive_aircraft:hull_reinforcement'), ['   ', 'ABA', '   '], {
    B: 'immersive_aircraft:hull',
    A: 'create:iron_sheet',
  });
  event.shaped(Item.of('immersive_aircraft:improved_landing_gear'), ['AB ', 'C  ', '   '], {
    B: 'minecraft:iron_ingot',
    A: 'create:iron_sheet',
    C: 'create:belt_connector',
  });
  event.shaped(Item.of('immersive_aircraft:sturdy_pipes'), ['AAB', 'BBB', 'BAA'], {
    B: 'create:fluid_pipe',
    A: 'create:iron_sheet',
  });
  event.shaped(Item.of('immersive_aircraft:nether_engine'), ['   ', 'ABA', 'CDC'], {
    C: 'create:sturdy_sheet',
    A: 'create:iron_sheet',
    D: 'immersive_aircraft:boiler',
    B: 'minecraft:lava_bucket',
  });
  event.shaped(Item.of('immersive_aircraft:eco_engine'), ['   ', 'ABA', 'CDC'], {
    A: 'create:iron_sheet',
    C: 'create:copper_sheet',
    D: 'immersive_aircraft:boiler',
    B: 'minecraft:water_bucket',
  });
  event.shaped(Item.of('immersive_aircraft:industrial_gears'), [' AB', 'C A', 'BC '], {
    C: 'create:iron_sheet',
    A: 'create:copper_sheet',
    B: 'create:cogwheel',
  });
  //IronSpells
  event.shaped(
    Item.of('irons_spellbooks:inscription_table'), // arg 1
    ['  B', 'WWW', 'F F'], // arg 2
    {
      B: 'minecraft:enchanted_book',
      W: 'malum:runewood_planks_slab',
      F: 'malum:runewood_planks_fence',
    },
  );
  event.shaped(
    Item.of('irons_spellbooks:iron_spell_book'), // arg 1
    [' S ', 'SBS', ' S '], // arg 2
    {
      B: 'irons_spellbooks:copper_spell_book',
      S: 'unify:iron_sheet',
    },
  );
  event.shapeless(
    Item.of('irons_spellbooks:shriving_stone'), // arg 1: output
    ['minecraft:raw_iron', 'eternal_starlight:shivering_gel'],
  );
  event.shaped('irons_spellbooks:portal_frame', ['ABA', 'C C', 'C C'], {
    C: 'irons_spellbooks:arcane_ingot',
    B: 'waystones:warp_dust',
    A: 'irons_spellbooks:mithril_ingot',
  });
  //Minecraft
  event.shaped(Item.of('minecraft:copper_trapdoor'), ['   ', ' AA', ' AA'], {
    A: 'minecraft:copper_ingot',
  });
});
