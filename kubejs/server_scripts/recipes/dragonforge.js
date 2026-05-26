function addDragonforgeRecipes(event) {
  const types = [
    {
      dragonType: "ice",
      blood: "iceandfire:ice_dragon_blood",
      result: "iceandfire:dragonsteel_ice_ingot",
    },
    {
      dragonType: "fire",
      blood: "iceandfire:fire_dragon_blood",
      result: "iceandfire:dragonsteel_fire_ingot",
    },
    {
      dragonType: "lightning",
      blood: "iceandfire:lightning_dragon_blood",
      result: "iceandfire:dragonsteel_lightning_ingot",
    },
  ];

  types.forEach((t) => {
    event.custom({
      type: "iceandfire:dragonforge",
      dragonType: t.dragonType,
      cookTime: 1000,
      input: {
        item: "irons_spellbooks:mithril_ingot",
      },
      blood: {
        item: t.blood,
      },
      result: {
        id: t.result,
        item: t.result,
      },
    });
  });
}

