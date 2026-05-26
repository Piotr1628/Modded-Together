ServerEvents.recipes((event) => {
  //Ae2
  //Storage Components
  event.recipes.create.mechanical_crafting(
    "ae2:cell_component_1k",
    ["DSD", "SCS", "DSD"],
    {
      D: "minecraft:redstone",
      S: "ae2:certus_quartz_crystal",
      C: "ae2:logic_processor",
    },
  );
  event.recipes.create.mechanical_crafting(
    "ae2:cell_component_4k",
    ["DED", "SCS", "DSD"],
    {
      D: "minecraft:redstone",
      S: "ae2:cell_component_1k",
      E: "ae2:calculation_processor",
      C: "ae2:quartz_glass",
    },
  );
  event.recipes.create.mechanical_crafting(
    "ae2:cell_component_16k",
    ["DED", "SCS", "DSD"],
    {
      D: "minecraft:glowstone_dust",
      S: "ae2:cell_component_4k",
      E: "ae2:calculation_processor",
      C: "ae2:quartz_glass",
    },
  );
  event.recipes.create.mechanical_crafting(
    "ae2:cell_component_64k",
    ["DED", "SCS", "DSD"],
    {
      D: "minecraft:glowstone_dust",
      S: "ae2:cell_component_16k",
      E: "ae2:calculation_processor",
      C: "ae2:quartz_glass",
    },
  );
  event.recipes.create.mechanical_crafting(
    "ae2:cell_component_256k",
    ["DED", "SCS", "DSD"],
    {
      D: "ae2:sky_dust",
      S: "ae2:cell_component_64k",
      E: "ae2:calculation_processor",
      C: "ae2:quartz_glass",
    },
  );
  event.recipes.create.mechanical_crafting(
    "ae2:spatial_cell_component_2",
    [" DFD ", "DSLSD", "FOCEF", "DSLSD", " DFD "],
    {
      D: "minecraft:glowstone_dust",
      S: "ae2:fluix_pearl",
      C: "ae2:engineering_processor",
      L: "ae2:quartz_glass",
      O: "ae2:formation_core",
      E: "ae2:annihilation_core",
      F: "ae2:fluix_crystal",
    },
  );
  event.recipes.create.mechanical_crafting(
    "ae2:spatial_cell_component_16",
    [" DFD ", "DSLSD", "FOCEF", "DSLSD", " DFD "],
    {
      D: "minecraft:glowstone_dust",
      S: "ae2:fluix_pearl",
      C: "ae2:engineering_processor",
      L: "ae2:spatial_cell_component_2",
      O: "ae2:formation_core",
      E: "ae2:annihilation_core",
      F: "ae2:fluix_crystal",
    },
  );
  event.recipes.create.mechanical_crafting(
    "ae2:spatial_cell_component_128",
    [" DFD ", "DSLSD", "FOCEF", "DSLSD", " DFD "],
    {
      D: "minecraft:glowstone_dust",
      S: "ae2:fluix_pearl",
      C: "ae2:engineering_processor",
      L: "ae2:spatial_cell_component_16",
      O: "ae2:formation_core",
      E: "ae2:annihilation_core",
      F: "ae2:fluix_crystal",
    },
  );
  event.recipes.create.mechanical_crafting(
    "ae2:controller",
    [" DDD ", "DSLSD", "DOCED", "DSLSD", " DDD "],
    {
      D: "ae2:printed_silicon",
      S: "eternal_starlight:unrealium_ingot",
      C: "irons_spellbooks:energized_core",
      L: "ae2:fluix_crystal",
      O: "ae2:formation_core",
      E: "ae2:annihilation_core",
    },
  );
  event.recipes.create.mechanical_crafting(
    "aeinfinitybooster:infinity_card",
    [" WWW ", "WUUUW", "WUBUW", "WUUUW", " WWW "],
    {
      W: "ae2:wireless_booster",
      U: "eternal_starlight:unrealium_ingot",
      B: "mcwholidays:standing_broomstick",
    },
  );
  event.recipes.create.mechanical_crafting(
    "extendedae:crystal_assembler",
    [" DFD ", "DSPSD", "FOCOF", "DSLSD", " DFD "],
    {
      D: "ae2:printed_silicon",
      S: "ae2:fluix_glass_cable",
      C: "extendedae:machine_frame",
      L: "ae2:sky_stone_tank",
      O: "ae2:logic_processor",
      F: "extendedae:entro_ingot",
      P: "ae2:crafting_terminal",
    },
  );
   event.recipes.create.mechanical_crafting(
    "extendedae:assembler_matrix_frame",
    [" DFD ", "DSLSD", "FLCLF", "DSLSD", " DFD "],
    {
      D: "minecraft:quartz",
      S: "ae2:sky_stone_block",
      C: "extendedae:machine_frame",
      L: "minecraft:lapis_lazuli",
      F: "eternal_starlight:unrealium_ingot",
    },
  ); 
  //Ice and FIre
  event.recipes.create.mechanical_crafting(
    "iceandfire:dragonforge_lightning_core_disabled",
    [" B B ", "BSFSB", " AHA ", "BSDSB", " B B "],
    {
      H: "iceandfire:lightning_dragon_heart",
      B: "iceandfire:dragonforge_lightning_brick",
      F: "cataclysm:void_core",
      S: "create:sturdy_sheet",
      A: "malum:soul_stained_steel_plating",
      D: "malum:paracausal_flame",
    },
  );

  event.recipes.create.mechanical_crafting(
    "iceandfire:dragonforge_ice_core_disabled",
    [" B B ", "BSFSB", " AHA ", "BSDSB", " B B "],
    {
      H: "iceandfire:ice_dragon_heart",
      B: "iceandfire:dragonforge_ice_brick",
      F: "cataclysm:void_core",
      S: "create:sturdy_sheet",
      A: "malum:soul_stained_steel_plating",
      D: "malum:paracausal_flame",
    },
  );

  event.recipes.create.mechanical_crafting(
    "iceandfire:dragonforge_fire_core_disabled",
    [" B B ", "BSFSB", " AHA ", "BSDSB", " B B "],
    {
      H: "iceandfire:fire_dragon_heart",
      B: "iceandfire:dragonforge_fire_brick",
      F: "cataclysm:void_core",
      S: "create:sturdy_sheet",
      A: "malum:soul_stained_steel_plating",
      D: "malum:paracausal_flame",
    },
  );
  //Immersive Aircraft
  event.recipes.create.mechanical_crafting(
    "immersive_aircraft:airship",
    ["SSSSS", " W W ", " HREP", " HHH ", "     "],
    {
      S: "immersive_aircraft:sail",
      W: "minecraft:string",
      H: "immersive_aircraft:hull",
      R: "create:red_seat",
      E: "immersive_aircraft:engine",
      P: "immersive_aircraft:propeller",
    },
  );
  event.recipes.create
    .mechanical_crafting(
      "immersive_aircraft:biplane",
      ["   S ", "S  S ", "HHREP", "S  S ", "   S "],
      {
        S: "immersive_aircraft:sail",
        H: "immersive_aircraft:hull",
        R: "create:red_seat",
        E: "immersive_aircraft:engine",
        P: "immersive_aircraft:propeller",
      },
    )
    .id("biplane_crafting");
  event.recipes.create.mechanical_crafting(
    "immersive_aircraft:warship",
    ["SSSSS", "SSSSS", "GEGEG", "HRHRH", "HHHHH"],
    {
      S: "immersive_aircraft:sail",
      H: "immersive_aircraft:hull",
      R: "create:red_seat",
      E: "immersive_aircraft:engine",
      G: "immersive_aircraft:industrial_gears",
    },
  );
});
