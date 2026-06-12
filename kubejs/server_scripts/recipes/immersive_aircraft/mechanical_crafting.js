ServerEvents.recipes((event) => {
  event.recipes.create.mechanical_crafting(
    'immersive_aircraft:airship',
    ['SSSSS', ' W W ', ' HREP', ' HHH ', '     '],
    {
      S: 'immersive_aircraft:sail',
      W: 'minecraft:string',
      H: 'immersive_aircraft:hull',
      R: 'create:red_seat',
      E: 'immersive_aircraft:engine',
      P: 'immersive_aircraft:propeller',
    },
  );

  event.recipes.create.mechanical_crafting(
    'immersive_aircraft:biplane',
    ['   S ', 'S  S ', 'HHREP', 'S  S ', '   S '],
    {
      S: 'immersive_aircraft:sail',
      H: 'immersive_aircraft:hull',
      R: 'create:red_seat',
      E: 'immersive_aircraft:engine',
      P: 'immersive_aircraft:propeller',
    },
  );

  event.recipes.create.mechanical_crafting(
    'immersive_aircraft:warship',
    ['SSSSS', 'SSSSS', 'GEGEG', 'HRHRH', 'HHHHH'],
    {
      S: 'immersive_aircraft:sail',
      H: 'immersive_aircraft:hull',
      R: 'create:red_seat',
      E: 'immersive_aircraft:engine',
      G: 'immersive_aircraft:industrial_gears',
    },
  );
});
