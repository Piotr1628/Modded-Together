ServerEvents.recipes((event) => {
  //Create
  event.replaceInput(
    { id: "create:crafting/materials/sand_paper" }, // Arg 1: the filter
    "minecraft:sand",
    "minecraft:sandstone",
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );
  //eidolon
  event.replaceInput(
    { mod: "eidolon_repraised" }, // Arg 1: the filter
    "eidolon_repraised:arcane_gold_ingot", // Arg 2: the item to replace
    "malum:hallowed_gold_ingot", // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );
  event.replaceOutput(
    { mod: "eidolon_repraised" }, // Arg 1: the filter
    "eidolon_repraised:arcane_gold_ingot", // Arg 2: the item to replace
    "malum:hallowed_gold_ingot", // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );
  event.replaceInput(
    { mod: "eidolon_repraised" }, // Arg 1: the filter
    "eidolon_repraised:arcane_gold_nugget", // Arg 2: the item to replace
    "malum:hallowed_gold_nugget", // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );
  event.replaceOutput(
    { mod: "eidolon_repraised" }, // Arg 1: the filter
    "eidolon_repraised:arcane_gold_nugget", // Arg 2: the item to replace
    "malum:hallowed_gold_nugget", // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );
  event.replaceOutput(
    { mod: "eidolon_repraised" }, // Arg 1: the filter
    "eidolon_repraised:arcane_gold_block", // Arg 2: the item to replace
    "malum:block_of_hallowed_gold", // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );
  event.replaceInput(
    { mod: "eidolon_repraised" }, // Arg 1: the filter
    "eidolon_repraised:arcane_gold_block", // Arg 2: the item to replace
    "malum:block_of_hallowed_gold", // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );
  //Farmers Delight
  event.replaceInput(
    { mod: "farmersdelight" }, // Arg 1: the filter
    "minecraft:egg", // Arg 2: the item to replace
    "#c:eggs", // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );
  event.replaceInput(
    { mod: "mynethersdelight" }, // Arg 1: the filter
    "minecraft:egg", // Arg 2: the item to replace
    "#c:eggs", // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  );
  //Malum
  event.replaceInput(
    { id: "malum:malignant_pewter_ingot" },
    "#c:ingots/iron",
    "eidolon_repraised:pewter_ingot",
  );
});
