ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'simplyswords:runic_longsword' },
    { id: 'simplyswords:runic_twinblade' },
    { id: 'simplyswords:runic_rapier' },
    { id: 'simplyswords:runic_cutlass' },
    { id: 'simplyswords:runic_greataxe' },
    { id: 'simplyswords:runic_chakram' },
    { id: 'simplyswords:runic_greathammer' },
    { id: 'simplyswords:runic_scythe' },
    { id: 'simplyswords:runic_sai' },
    { id: 'simplyswords:runic_glaive' },
    { id: 'simplyswords:runic_warglaive' },
    { id: 'simplyswords:runic_halberd' },
    { id: 'simplyswords:runic_spear' },
    { id: 'simplyswords:runic_katana' },
    { id: 'simplyswords:runic_claymore' },
    { id: 'simplyswords:tainted_relic' },
    { id: 'simplyswords:righteous_relic' },
    { id: 'simplyswords:sunfire' },
    { id: 'simplyswords:harbinger' },
    { id: 'simplyswords:waking_lichblade' },
    { id: 'simplyswords:awakened_lichblade' },
    { id: 'simplyswords:runefused_gem' },
    { id: 'simplyswords:netherfused_gem' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
