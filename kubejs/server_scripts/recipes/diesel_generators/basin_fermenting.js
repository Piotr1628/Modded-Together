ServerEvents.recipes((event) => {
  const id_prefix = 'mt:createdieselgenerators/basin_fermenting/';

  const recipes = [
    {
      ingredients: [
        {
          item: 'createaddition:biomass',
        },
        {
          item: 'createaddition:biomass',
        },
        {
          item: 'createaddition:biomass',
        },
        {
          item: 'createaddition:biomass',
        },
        {
          item: 'createaddition:biomass',
        },
        {
          item: 'createaddition:biomass',
        },
        {
          item: 'createaddition:biomass',
        },
        {
          item: 'createaddition:biomass',
        },
        {
          item: 'createaddition:biomass',
        },
      ],
      processing_time: 12000,
      results: [
        {
          id: 'createdieselgenerators:ethanol',
          amount: 250,
        },
      ],
      id: `${id_prefix}ethanol_from_biomass`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'createdieselgenerators:basin_fermenting';
    event.custom(recipe).id(recipe.id);
  });
});
