ServerEvents.recipes((event) => {
  //Ars
  event.recipes.eidolon_repraised.worktable(
    "ars_nouveau:ring_of_potential",
    ["   ", "IGI", " I "],
    ["SSSS"],
    {
      S: "create:iron_sheet",
      G: "ars_nouveau:source_gem",
      I: "minecraft:iron_nugget",
      A: "irons_spellbooks:arcane_essence",
    },
  );
  event.shapeless("ars_nouveau:arcane_pedestal", "ars_nouveau:arcane_platform");
  event.recipes.eidolon_repraised.worktable(
    "ars_nouveau:imbuement_chamber",
    [" P ", "PSP", " P "],
    ["HHHH"],
    {
      S: "unify:gold_sheet",
      P: "ars_nouveau:archwood_planks",
      H: "malum:hallowed_gold_ingot",
    },
  );
  event.recipes.eidolon_repraised.worktable(
    "ars_nouveau:arcane_pedestal",
    ["BGB", "IBI", "IBI"],
    ["SSSS"],
    {
      S: "create:golden_sheet",
      G: "ars_nouveau:source_gem",
      I: "malum:hallowed_gold_ingot",
      B: "ars_nouveau:sourcestone",
    },
  );
  event.recipes.eidolon_repraised.worktable(
    "ars_nouveau:arcane_core",
    ["BGB", "B B", "BGB"],
    ["IIII"],
    {
      G: "ars_nouveau:source_gem",
      I: "malum:hallowed_gold_ingot",
      B: "ars_nouveau:sourcestone",
    },
  );
  event.recipes.eidolon_repraised.worktable(
    "ars_nouveau:enchanting_apparatus",
    [" H ", "HBH", " H "],
    ["SSSS"],
    {
      S: "create:golden_sheet",
      B: "ars_nouveau:source_gem_block",
      H: "malum:hallowed_gold_ingot",
    },
  );
  event.recipes.eidolon_repraised.worktable(
    "8x ars_nouveau:warp_scroll",
    ["PPP", "PEP", "PPP"],
    ["AAAA"],
    {
      P: "minecraft:map",
      E: "royalvariations:royal_ender_pearl",
      A: "irons_spellbooks:arcane_essence",
    },
  );
  event.recipes.eidolon_repraised.worktable(
    "ars_nouveau:dull_trinket",
    [" L ", "LBL", "IGI"],
    ["AAAA"],
    {
      L: "minecraft:leather",
      B: "create:brass_ingot",
      I: "iceandfire:silver_nugget",
      G: "ars_nouveau:source_gem",
      A: "irons_spellbooks:arcane_essence",
    },
  );
  event.recipes.eidolon_repraised.worktable(
    "ars_nouveau:novice_spell_book",
    ["   ", "SBS", "   "],
    ["AAAA"],
    {
      S: "unify:gold_sheet",
      B: "minecraft:book",
      A: "irons_spellbooks:arcane_essence",
    },
  );
  event.recipes.eidolon_repraised.worktable(
    "ars_nouveau:source_jar",
    ["SNS", "IJI", "III"],
    ["AAAA"],
    {
      S: "ars_nouveau:archwood_slab",
      N: "malum:hallowed_gold_nugget",
      I: "malum:hallowed_gold_ingot",
      J: "supplementaries:jar",
      A: "irons_spellbooks:arcane_essence",
    },
  );
});
