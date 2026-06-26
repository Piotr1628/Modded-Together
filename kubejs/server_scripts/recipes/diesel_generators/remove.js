ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'createdieselgenerators:bulk_fermenting/fermentable' },
    { id: 'createdieselgenerators:basin_fermenting/fermentable' },
    { id: 'createdieselgenerators:compacting/plant_oil' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
