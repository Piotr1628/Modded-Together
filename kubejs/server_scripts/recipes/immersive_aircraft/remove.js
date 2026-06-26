ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'immersive_aircraft:airship' },
    { id: 'immersive_aircraft:biplane' },
    { id: 'immersive_aircraft:warship' },
    { id: 'immersive_aircraft:propeller' },
    { id: 'immersive_aircraft:enhanced_propeller' },
    { id: 'immersive_aircraft:steel_boiler' },
    { id: 'immersive_aircraft:gyroscope' },
    { id: 'immersive_aircraft:hull' },
    { id: 'immersive_aircraft:sail' },
    { id: 'immersive_aircraft:engine' },
    { id: 'immersive_aircraft:quadrocopter' },
    { id: 'immersive_aircraft:nether_engine' },
    { id: 'immersive_aircraft:eco_engine' },
    { id: 'immersive_aircraft:industrial_gears' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
