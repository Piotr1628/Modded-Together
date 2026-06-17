ServerEvents.recipes((event) => {
  event.recipes.oritech
    .refinery()
    .itemInputs([Item.of('oritech:raw_silicon', 4)])
    .fluidInput('2000x oritech:still_silicon_wash')
    .itemOutputs([Item.of('oritech:silicon', 4)])
    .time(100);
});
