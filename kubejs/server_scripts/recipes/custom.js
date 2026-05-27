ServerEvents.recipes((event) => {
  // Cataclysm
  event.custom({
    type: 'cataclysm:weapon_fusion',
    base: { item: 'simplyswords:runic_longsword' },
    addition: { item: 'crystal_chronicles:divinite_shard' },
    result: {
      item: 'crystal_chronicles:paladin_sword',
      id: 'crystal_chronicles:paladin_sword',
    },
  });
  event.custom({
    type: 'cataclysm:weapon_fusion',
    base: { item: 'simplyswords:runic_greataxe' },
    addition: { item: 'crystal_chronicles:ice_shard' },
    result: {
      item: 'crystal_chronicles:ice_hammer',
      id: 'crystal_chronicles:ice_hammer',
    },
  });
  event.custom({
    type: 'cataclysm:weapon_fusion',
    base: { item: 'simplyswords:runic_greathammer' },
    addition: { item: 'crystal_chronicles:voidstone_shard' },
    result: {
      item: 'crystal_chronicles:staff',
      id: 'crystal_chronicles:staff',
    },
  });
  event.custom({
    type: 'cataclysm:weapon_fusion',
    base: { item: 'simplyswords:runic_scythe' },
    addition: { item: 'crystal_chronicles:hemalite_shard' },
    result: {
      item: 'crystal_chronicles:blood_scythe',
      id: 'crystal_chronicles:blood_scythe',
    },
  });
  event.custom({
    type: 'cataclysm:weapon_fusion',
    base: { item: 'simplyswords:runic_claymore' },
    addition: { item: 'crystal_chronicles:floralite_shard' },
    result: {
      item: 'crystal_chronicles:spear',
      id: 'crystal_chronicles:spear',
    },
  });
  event.custom({
    type: 'cataclysm:weapon_fusion',
    base: { item: 'simplyswords:runic_spear' },
    addition: { item: 'crystal_chronicles:voltite_shard' },
    result: {
      item: 'crystal_chronicles:lightning_bident',
      id: 'crystal_chronicles:lightning_bident',
    },
  });
  event.custom({
    type: 'cataclysm:weapon_fusion',
    base: { item: 'simplyswords:runic_chakram' },
    addition: { item: 'crystal_chronicles:volcanite_shard' },
    result: {
      item: 'crystal_chronicles:chakram',
      id: 'crystal_chronicles:chakram',
    },
  });
  event.custom({
    type: 'cataclysm:weapon_fusion',
    base: { item: 'cataclysm:azure_sea_shield' },
    addition: { item: 'crystal_chronicles:divinite_shard' },
    result: {
      item: 'crystal_chronicles:paladin_shield',
      id: 'crystal_chronicles:paladin_shield',
    },
  });
  //Starlight
  event.custom({
    type: 'eternal_starlight:alloy',
    burn_time: 400,
    ingredients: [
      {
        item: 'irons_spellbooks:arcane_ingot',
      },
      {
        item: 'eternal_starlight:deepsilver_ingot',
      },
      {
        item: 'eternal_starlight:deepsilver_ingot',
      },
      {
        item: 'unify:lead_ingot',
      },
      {
        item: 'hazennstuff:starkissed_zenalite',
      },
    ],
    results: [
      {
        amount: 2,
        item: {
          count: 1,
          id: 'hazennstuff:zenalite_ingot',
        },
      },
    ],
  });
  event.custom({
    type: 'eternal_starlight:alloy',
    burn_time: 400,
    ingredients: [
      {
        item: 'minecraft:iron_ingot',
      },
      {
        item: 'oritech:coal_dust',
      },
      {
        item: 'oritech:coal_dust',
      },
      {
        item: 'oritech:coal_dust',
      },
      {
        item: 'oritech:coal_dust',
      },
      {
        item: 'oritech:coal_dust',
      },
      {
        item: 'oritech:coal_dust',
      },
      {
        item: 'oritech:coal_dust',
      },
      {
        item: 'oritech:coal_dust',
      },
    ],
    results: [
      {
        amount: 1,
        item: {
          count: 1,
          id: 'oritech:steel_ingot',
        },
      },
    ],
  });
});
