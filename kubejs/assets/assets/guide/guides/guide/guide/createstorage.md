# Create Storage


## Getting Started
To get started you will require a stock ticker, stock link, blaze burner, an inventory block, packagers and a form of rotational power.

* Stock Ticker
    <RecipesFor id='create:stock_ticker'/>
* Stock Link
    <RecipesFor id='create:stock_link'/>

* Blaze Burner
    <RecipesFor id='create:empty_blaze_burner'/>

__Instructions to start__
* Place a Stock Ticker on the ground and then a Blaze Burner next to it. This will make a stock taker.
* Right Click the Stock link on the Stock Ticker to link it.
* Place the linked Stock link on the inventory (chest/item vault).
* The Stock Taker will now display everything in that invtory.

To get Items from the chest to you there are 2 ways, I am going to cover 1 way, which is Frogports.

You will need:

* Packager
    <RecipeFor id='create:packager'/>
* Frogport
    <RecipeFor id='create:package_frogport'/>

__Linking Frogports to your system__
* Place a packager facing your inventory(chets/vault)
* Link a Frog port to a chain conveyor
* Place linked Frogport ontop of Packager
* Name Frogport (i.e. Main In)
* Do the same for the other chest which you want the items to be exported to.
* Name Frogport something different (i.e. Main Out).
* Place a Sign on the Packager named whatever the 1st packager was called (i.e. Main In)
* In the Stick Taker at the bottom of the UI change the text from nothing to whatever the 2nd frogport it called (i.e. Main Out)
* Once you apply power to your chain conveyor the system should now operate.
---
## Example
## 
<GameScene>
<ImportStructure src="test.nbt" />
</GameScene>

In this example you can use an Item Hatch to put items back into the Item Vault

* Item Vault
    <RecipeFor id='create:item_vault'/>
* Item Hatch
    <RecipesFor id='create:item_hatch'/>