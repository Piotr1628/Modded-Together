ServerEvents.recipes((event) => {
  event.shaped('4x apothic_enchanting:scrap_tome', ['IBI', 'BAB', 'IBI'], {
    B: 'minecraft:book',
    I: 'minecraft:netherite_ingot',
    A: 'minecraft:anvil',
  });
  event.shaped('apotheosis:simple_reforging_table', [' H ', 'SCS', 'PPP'], {
    H: 'createdieselgenerators:hammer',
    C: 'cataclysm:storm_eye',
    S: 'minecraft:stone',
    P: 'malum:runewood_planks',
  });
});
