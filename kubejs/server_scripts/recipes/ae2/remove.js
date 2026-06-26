ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'ae2:inscriber/logic_processor' },
    { id: 'ae2:inscriber/calculation_processor' },
    { id: 'ae2:inscriber/engineering_processor' },
    { id: 'ae2:inscriber/controller' },
    { id: 'ae2:inscriber/energy_acceptor' },
    { id: 'ae2:inscriber/quartz_glass' },
    { id: 'ae2:network/cells/spatial_components' },
    { id: 'ae2:network/cells/4k' },
    { id: 'ae2:network/cells/16k' },
    { id: 'ae2:network/cells/64k' },
    { id: 'ae2:network/cells/256k' },
    { id: 'ae2:network/cells/spatial_2' },
    { id: 'ae2:network/cells/spatial_16' },
    { id: 'ae2:network/cells/spatial_128' },
    { id: 'ae2:materials/formationcore' },
    { id: 'ae2:materials/annihilationcore' },
    { id: 'ae2:network/cables/glass_fluix' },
    { id: 'ae2:network/parts/quartz_fiber_part' },
    { id: 'ae2:inscriber/logic_processor_print' },
    { id: 'ae2:network/cables/covered_fluix' },
    { id: 'ae2:network/cells/item_storage_components_cell_1k_part' },
    { id: 'ae2:network/cells/item_storage_components_cell_4k_part' },
    { id: 'ae2:network/cells/item_storage_components_cell_16k_part' },
    { id: 'ae2:network/cells/item_storage_components_cell_64k_part' },
    { id: 'ae2:network/cells/item_storage_components_cell_256k_part' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
