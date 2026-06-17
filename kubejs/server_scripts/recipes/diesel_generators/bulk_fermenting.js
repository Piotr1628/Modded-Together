ServerEvents.recipes((event) => {
  const id_prefix = 'mt:createdieselgenerators/bulk_fermenting/';

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
          item: 'minecraft:sugar',
        },
        {
          item: 'minecraft:sugar',
        },
        {
          item: 'minecraft:sugar',
        },
      ],
      processing_time: 9000,
      results: [
        {
          id: 'createdieselgenerators:ethanol',
          amount: 250,
        },
      ],
      id: `${id_prefix}ethanol_from_fermentable_with_sugar`,
    },
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
      id: `${id_prefix}ethanol_from_fermentable`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'createdieselgenerators:bulk_fermenting';
    event.custom(recipe).id(recipe.id);
  });
});
