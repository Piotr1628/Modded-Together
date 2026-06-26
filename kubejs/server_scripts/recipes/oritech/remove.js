ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'oritech:centrifuge/fluid/plasticoilbetter' },
    { id: 'oritech:foundry/alloy/steel' },
    { id: 'oritech:biosteel_blockblockinv' },
    { id: 'oritech:crafting/alloy/steel' },
    { id: 'oritech:refinery/wood' },
    { id: 'oritech:foundry/alloy/electrum' },
    { id: 'oritech:mixing/compat/create/electrum' },
    { id: 'oritech:crafting/alloy/electrum' },
    { id: 'oritech:mixing/compat/create/steel' },
    { id: 'oritech:foundry/alloy/adamant' },
    { id: 'oritech:foundry/alloy/biosteel' },
    { id: 'oritech:crafting/alloy/adamant' },
    { id: 'oritech:centrifuge/fluid/siliconwash' },
    { id: 'oritech:centrifuge/fluid/siliconwashbad' },
    { id: 'oritech:crafting/alloy/rawsilicon' },
    { id: 'oritech:silicon_from_smelting_raw_silicon' },
    { id: 'oritech:refinery/siliconwashing' },
    { id: 'oritech:centrifuge/fluid/biopolymer' },
    { id: 'oritech:centrifuge/fluid/biopolymer_bioblock' },
    { id: 'oritech:mixing/compat/create/biosteel' },
    { id: 'oritech:crafting/manualresin' },
    { id: 'oritech:crafting/assembler' },
    { id: 'oritech:crafting/assembleralt' },
    { id: 'oritech:crafting/foundry' },
    { id: 'oritech:crafting/centrifuge' },
    { id: 'oritech:crafting/centrifugealt' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
