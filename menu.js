function MenuItemsCreator() {
   
}
MenuItemsCreator.prototype.calculatePrice = function() {
   console.log('calculatePrice is work')
}
MenuItemsCreator.prototype.calculateCalories = function() {
   console.log('calculateCalories is work')
}
MenuItemsCreator.prototype.chooseKind = function() {
   console.log('chooseKind is work')
}


function Hamburger(size, stuff) {
   MenuItemsCreator.call(this)
   this.size = size
   this.stuff = stuff
}
Hamburger.prototype = Object.create(MenuItemsCreator.prototype)
Hamburger.prototype.getSize = function() {
   console.log('getSize is work')
} 
Hamburger.prototype.getStuffing = function() {
   console.log('getStuffing is work')
}
Hamburger.prototype.chooseKind = function() {
   console.log('Ooops, no options like this for burger(')
}


function DishSalad(howManyGrams) {
   MenuItemsCreator.call(this)
   this.howManyGrams = howManyGrams
}
DishSalad.prototype = Object.create(MenuItemsCreator.prototype)


function Drink() {
   MenuItemsCreator.call(this)
}
Drink.prototype = Object.create(MenuItemsCreator.prototype)


function NewOrder() {
   MenuItemsCreator.call(this)
}
NewOrder.prototype = Object.create(MenuItemsCreator.prototype)
NewOrder.prototype.addSomething = function() {
   console.log('addSomething is work')
} 
NewOrder.prototype.delSomething = function() {
   console.log('delSomething is work')
} 
NewOrder.prototype.pay = function() {
   console.log('pay is work')
} 

// var smthing = new MenuItemsCreator()
// smthing.chooseKind()
// var newHamburger = new Hamburger(1, 1)
// newHamburger.calculateCalories()
// newHamburger.getStuffing()
// newHamburger.chooseKind()




// node menu.js