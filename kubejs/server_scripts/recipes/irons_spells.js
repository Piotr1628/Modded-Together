ServerEvents.recipes((event) => {
  event.shaped(
    Item.of("irons_spellbooks:inscription_table"), // arg 1
    ["  B", "WWW", "F F"], // arg 2
    {
      B: "minecraft:enchanted_book",
      W: "malum:runewood_planks_slab",
      F: "malum:runewood_planks_fence",
    },
  );

  event.shaped(
    Item.of("irons_spellbooks:iron_spell_book"), // arg 1
    [" S ", "SBS", " S "], // arg 2
    {
      B: "irons_spellbooks:copper_spell_book",
      S: "unify:iron_sheet",
    },
  );

  event.shapeless(
    Item.of("irons_spellbooks:shriving_stone"), // arg 1: output
    ["minecraft:raw_iron", "eternal_starlight:shivering_gel"],
  );

  event.recipes.create
    .mixing(Fluid.of("irons_spellbooks:ice_venom", 250), [
      Fluid.of("eternal_starlight:ether", 1000),
      "minecraft:spider_eye",
    ])
    .heated();

  event.shaped("irons_spellbooks:portal_frame", ["ABA", "C C", "C C"], {
    C: "irons_spellbooks:arcane_ingot",
    B: "waystones:warp_dust",
    A: "irons_spellbooks:mithril_ingot",
  });
});
