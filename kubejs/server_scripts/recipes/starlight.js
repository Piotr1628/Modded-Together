ServerEvents.recipes((event) => {
  event.custom({
    type: "eternal_starlight:alloy",
    burn_time: 400,
    ingredients: [
      {
        item: "irons_spellbooks:arcane_ingot",
      },
      {
        item: "eternal_starlight:deepsilver_ingot",
      },
      {
        item: "eternal_starlight:deepsilver_ingot",
      },
      {
        item: "unify:lead_ingot",
      },
      {
        item: "hazennstuff:starkissed_zenalite",
      },
    ],
    results: [
      {
        amount: 2,
        item: {
          count: 1,
          id: "hazennstuff:zenalite_ingot",
        },
      },
    ],
  });
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:blaze_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:blaze_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:blaze_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:blaze_crystal_ingredients",
    ],
    "eternal_starlight:red_starlight_crystal_shard",
    "eternal_starlight:blaze_crystal",
    10000,
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:wind_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:wind_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:wind_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:wind_crystal_ingredients",
    ],
    "eternal_starlight:red_starlight_crystal_shard",
    "eternal_starlight:wind_crystal",
    10000,
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:terra_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:terra_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:terra_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:terra_crystal_ingredients",
    ],
    "eternal_starlight:red_starlight_crystal_shard",
    "eternal_starlight:terra_crystal",
    10000,
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:lunar_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:lunar_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:lunar_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:lunar_crystal_ingredients",
    ],
    "eternal_starlight:red_starlight_crystal_shard",
    "eternal_starlight:lunar_crystal",
    10000,
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:water_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:water_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:water_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:water_crystal_ingredients",
    ],
    "eternal_starlight:red_starlight_crystal_shard",
    "eternal_starlight:water_crystal",
    10000,
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:light_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:light_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:light_crystal_ingredients",
      "eternal_starlight:red_starlight_crystal_shard",
      "#eternal_starlight:light_crystal_ingredients",
    ],
    "eternal_starlight:red_starlight_crystal_shard",
    "eternal_starlight:light_crystal",
    10000,
  );
});
