var MenuItemsCreator = function(params) {
   this.name = params.name || 'menu'
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
   this.quantity = params.quantity
   this.size = params.size
   this.stuffing = params.stuffing
}
Hamburger.prototype = Object.create(MenuItemsCreator.prototype)
Hamburger.prototype.constructor = Hamburger
Hamburger.prototype.getSize = function() {
   console.log(myOrder.myHamburger)
} 
Hamburger.prototype.getStuffing = function() {
   console.log('getStuffing is work')
}
Hamburger.prototype.chooseKind = function() {
   console.log('Ooops, no options like this for burger(')
}


var DishSalad = function(params) {
   MenuItemsCreator.apply(this, arguments)
   this.quantity = params.quantity
   this.kind = params.kind
   this.grams = params.grams
}
DishSalad.prototype = Object.create(MenuItemsCreator.prototype)
DishSalad.prototype.constructor = DishSalad


var Drink = function(params) {
   MenuItemsCreator.apply(this, arguments)
   this.quantity = params.quantity
   this.kind = params.kind
}
Drink.prototype = Object.create(MenuItemsCreator.prototype)
Drink.prototype.constructor = Drink


var NewOrder = function(params) {
   MenuItemsCreator.apply(this, arguments)
   this.bigBurgersCounter = params.bigBurgersCounter
   this.smallBurgersCounter = params.smallBurgersCounter
   this.dishSaladCounter = params.dishSaladCounter
}
NewOrder.prototype = Object.create(MenuItemsCreator.prototype)
NewOrder.prototype.constructor = NewOrder
NewOrder.prototype.addBigBurger = function(stuff) {
   upStuff = stuff.toUpperCase()
   if (upStuff === 'CHEESE') {
      myOrder.bigBurgersCounter.bigCheese++
   } else if (upStuff === 'SALAD') {
      myOrder.bigBurgersCounter.bigSalad++
   } else if (upStuff === 'POTATO') {
      myOrder.bigBurgersCounter.bigPotato++
   } else {
      console.log('We have not got stuffing like this:', stuff, '- please chouse another (with CHEESE, SALAD or POTATO)')
   }   
} 
NewOrder.prototype.delBigBurger = function(stuff) {
   upStuff = stuff.toUpperCase()
   if (upStuff === 'CHEESE' && myOrder.bigBurgersCounter.bigCheese > 0) {
      myOrder.bigBurgersCounter.bigCheese--
   } else if (upStuff === 'SALAD' && myOrder.bigBurgersCounter.bigSalad > 0) {
      myOrder.bigBurgersCounter.bigSalad--
   } else if (upStuff === 'POTATO' && myOrder.bigBurgersCounter.bigPotato > 0) {
      myOrder.bigBurgersCounter.bigPotato--
   } else {
      console.log("You don't have big burgers like this in your order yet")
   }  
} 
NewOrder.prototype.addSmallBurger = function(stuff) {
   upStuff = stuff.toUpperCase()
   if (upStuff === 'CHEESE') {
      myOrder.smallBurgersCounter.smallCheese++
   } else if (upStuff === 'SALAD') {
      myOrder.smallBurgersCounter.smallSalad++
   } else if (upStuff === 'POTATO') {
      myOrder.smallBurgersCounter.smallPotato++
   } else {
      console.log('We have not got stuffing like this:', stuff, '- please chouse another (with CHEESE, SALAD or POTATO)')
   }   
} 
NewOrder.prototype.delSmallBurger = function(stuff) {
   upStuff = stuff.toUpperCase()
   if (upStuff === 'CHEESE' && myOrder.smallBurgersCounter.smallCheese > 0) {
      myOrder.smallBurgersCounter.smallCheese--
   } else if (upStuff === 'SALAD' && myOrder.smallBurgersCounter.smallSalad > 0) {
      myOrder.smallBurgersCounter.smallSalad--
   } else if (upStuff === 'POTATO' && myOrder.smallBurgersCounter.smallPotato > 0) {
      myOrder.smallBurgersCounter.smallPotato--
   } else {
      console.log("You don't have small burgers like this in your order yet")
   }  
} 
NewOrder.prototype.addDishSalad = function(kind, grams) {
   upKind = kind.toUpperCase()
   if (upKind === 'CAESAR') {
      myOrder.dishSaladCounter.caesarSalad.push([kind, grams])
   } else if (upKind === 'OLIVIE') {
      myOrder.dishSaladCounter.olivieSalad.push([kind, grams])
   } else {
      console.log('We have not got salads like this:', kind, '- please chouse another (CAESAR or OLIVIE)')
   }  
}
NewOrder.prototype.delDishSalad = function(kind, grams) {
   upKind = kind.toUpperCase()
   if (myOrder.dishSaladCounter.caesarSalad !== []) {
      if (upKind === 'CAESAR') {
      var counter = 0
         myOrder.dishSaladCounter.caesarSalad.map(function(saladItem) {
            counter++
            if (saladItem[1] === grams){ 
               myOrder.dishSaladCounter.caesarSalad.slice(myOrder.dishSaladCounter.caesarSalad[counter-1])
            }
         })
         //TODO:
      }
   } else {
      console.log('You have not added any salad')
   }
   
   // if ( upKind === 'CAESAR' && grams === myOrder.dishSaladCounter.caesarSalad[1]) {
   //    delete myOrder.dishSaladCounter.caesarSalad
   // } else if (upKind === 'OLIVIE') {
   //    myOrder.dishSaladCounter.olivieSalad.push([kind, grams])
   // } 
}
NewOrder.prototype.pay = function() {
   console.log('pay is work')
} 
NewOrder.prototype.chooseKind = function() {
   console.log('Ooops, no options like this for NewOrder(')
}


var hamburger = new Hamburger({
   name: 'hamburger',
   quantity: 0,
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
   quantity: 0,
   grams: 0,
   kind: {
      CAESAR: [100, 20],
      OLIVIE: [50, 80]
   }
})


var drink = new Drink({
   name: 'drink',
   quantity: 0,
   kind: {
      COLA: [50, 40],
      COFFEE: [80, 20]
   }
})


var myOrder = new NewOrder({
   name: 'order',
   bigBurgersCounter: {
      bigCheese: 0,
      bigSalad: 0,
      bigPotato: 0
   },
   smallBurgersCounter: {
      smallCheese: 0,
      smallSalad: 0,
      smallPotato: 0
   }, 
   dishSaladCounter: {
      caesarSalad: [],
      olivieSalad: []
   }
   // show: console.log(drink.kind.COLA[1] + 10),

})
// Object.defineProperties(myOrder, {
//    'property1': {
//       writable: false,
//       configurable: false
//     },
// })





// node menu.js