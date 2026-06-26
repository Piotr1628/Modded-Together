ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'extendedae:inscriber/concurrent_process' },
    { id: 'extendedae:crystal_assembler' },
    { id: 'extendedae:assembler_matrix_frame' },
    { id: 'extendedae:entro_seed' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
