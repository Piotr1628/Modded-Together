ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'gateways:basic/blaze' },
    { id: 'gateways:basic/enderman' },
    { id: 'gateways:emerald_grove' },
    { id: 'gateways:endless/blaze' },
    { id: 'gateways:overworldian_nights' },
    { id: 'gateways:hellish_fortress' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
