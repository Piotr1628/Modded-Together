# Sophisticated Storage

Sophisticated Storage contains different Tiers of Chests:

### Standard
<RecipeFor id='sophisticatedstorage:chest'/>
### Copper
<RecipeFor id='sophisticatedstorage:copper_chest'/>
### Iron
<RecipeFor id='sophisticatedstorage:iron_chest'/>
### Gold
<RecipeFor id='sophisticatedstorage:gold_chest'/>
### Diamond
<RecipeFor id='sophisticatedstorage:diamond_chest'/>
### Netherite
<RecipeFor id='sophisticatedstorage:netherite_chest'/>

## Connecting Chests
Chests Can be Connected togther using a Storage Controller:

<RecipeFor id='sophisticatedstorage:controller'/>

Place the chests next to the Storage Controller to Connect them:
<GameScene>
<Block id="sophisticatedstorage:controller" />
<Block x= '1' id="sophisticatedstorage:netherite_chest" />
<Block x= '2' id="sophisticatedstorage:diamond_chest" />
<Block y= '1' id="sophisticatedstorage:diamond_chest" />
<Block y= '2' id="sophisticatedstorage:diamond_chest" />
<Block x= '1' y= '1' id="sophisticatedstorage:gold_chest" />
</GameScene>

## Upgrades
Upgrades can be added to any Sophisticated Storage Chests

### Stack Upgrades
<Row>
<ItemImage id="sophisticatedstorage:stack_upgrade_tier_1"/>
<ItemImage id="sophisticatedstorage:stack_upgrade_tier_2"/>
<ItemImage id="sophisticatedstorage:stack_upgrade_tier_3"/> 
<ItemImage id="sophisticatedstorage:stack_upgrade_tier_4"/> 
<ItemImage id="sophisticatedstorage:stack_upgrade_tier_5"/> 
</Row>

Stack Upgrades increase the stack size of items within the chest.
