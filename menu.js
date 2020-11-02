var MenuItemsCreator = function(params) {
   this.name = params.name
}
MenuItemsCreator.prototype.calculatePrice = function() {
   console.log('calculatePrice is work')
}
MenuItemsCreator.prototype.calculateCalories = function() {
   console.log('calculateCalories is work')
}
MenuItemsCreator.prototype.chooseKind = function() {
   console.log('chooseKind is work', this.kind)
}


var Hamburger = function(params) {
   MenuItemsCreator.apply(this, arguments)
   this.size = params.size
   this.stuffing = params.stuffing
}
Hamburger.prototype = Object.create(MenuItemsCreator.prototype)
Hamburger.prototype.constructor = Hamburger
Hamburger.prototype.getSize = function() {
   console.log('getSize is work')
} 
Hamburger.prototype.getStuffing = function() {
   console.log('getStuffing is work')
}
Hamburger.prototype.chooseKind = function() {
   console.log('Ooops, no options like this for burger(')
}


var DishSalad = function(params) {
   MenuItemsCreator.apply(this, arguments)
   this.kind = params.kind
   // this.howManyGrams = params
}
DishSalad.prototype = Object.create(MenuItemsCreator.prototype)
DishSalad.prototype.constructor = DishSalad


var Drink = function(params) {
   MenuItemsCreator.apply(this, arguments)
   this.kind = params.kind
}
Drink.prototype = Object.create(MenuItemsCreator.prototype)
Drink.prototype.constructor = Drink


var NewOrder = function(params) {
   MenuItemsCreator.apply(this, arguments)
   this.kind = params.kind
}
NewOrder.prototype = Object.create(MenuItemsCreator.prototype)
NewOrder.prototype.constructor = NewOrder
NewOrder.prototype.addSomething = function() {
   console.log('addSomething is work')
} 
NewOrder.prototype.delSomething = function() {
   console.log('delSomething is work')
} 
NewOrder.prototype.pay = function() {
   console.log('pay is work')
} 
NewOrder.prototype.chooseKind = function() {
   console.log('Ooops, no options like this for NewOrder(')
}





// var newMenu = new MenuItemsCreator({
//    hamburger: new Hamburger({
//       name: 'ham',
//       size: 'ham',
//       stuffing: 'ham'
//    }),
//    dishSalad: 'menu', 
//    drink: 'menu'
// })
// console.log(newMenu);
// Hamburger.calculateCalories()

var hamburger = new Hamburger({
   name: 'hamburger',
   size: {
      SIZE_SMALL: [50, 20],
      SIZE_LARGE: [100, 40]
   },
   stuffing: {
      STUFFING_CHEESE: [10, 20],
      STUFFING_SALAD: [20, 5],
      STUFFING_POTATO: [15, 10]
   }
})


var dishSalad = new DishSalad({
   name: 'salad',
   kind: {
      CAESAR: [100, 20],
      OLIVIE: [50, 80]
   }
})

var drink = new Drink({
   name: 'drink',
   kind: {
      COLA: [50, 40],
      COFFEE: [80, 20]
   }
})

var myOrder = new NewOrder({

})
myOrder.addSomething()





// node 5ver.js