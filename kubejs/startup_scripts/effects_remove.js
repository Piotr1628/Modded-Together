const $Result = Java.loadClass('net.neoforged.neoforge.event.entity.living.MobEffectEvent$Applicable$Result');
const $Player = Java.loadClass('net.minecraft.world.entity.player.Player');

const forbiddenEffects = [
  'hazennstuff:archer_set_bonus',
  'hazennstuff:dryads_blessing',
  'hazennstuff:fireblossom_ruler',
  'hazennstuff:fireblossom_warrior',
  'hazennstuff:flame_kissed',
  'hazennstuff:swordmaster_set_bonus',
  'hazennstuff:tyrants_grace',
  'hazennstuff:mage_set_bonus',
];

NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.MobEffectEvent$Applicable', (event) => {
  const entity = event.getEntity();
  const effectInstance = event.getEffectInstance();

  if (entity instanceof $Player && effectInstance) {
    const effectId = effectInstance.getEffect().getRegisteredName();

    if (forbiddenEffects.includes(effectId)) {
      event.setResult($Result.DO_NOT_APPLY);
    }
  }
});
