ServerEvents.recipes((event) => {
  event.recipes.create.item_application('sophisticatedstorage:controller', [
    'create:andesite_casing',
    'sophisticatedstorage:basic_tier_upgrade',
  ]);
});
