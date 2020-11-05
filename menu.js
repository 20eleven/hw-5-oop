var MenuItemsCreator = function(params) {
   this.name = params.name || 'menu'
}
MenuItemsCreator.prototype.calculatePrice = function() {
   console.log('calculatePrice is work')//TODO:
}
MenuItemsCreator.prototype.calculateCalories = function() {
   console.log('calculateCalories is work')//TODO:
}


var Hamburger = function(params) {
   MenuItemsCreator.apply(this, arguments)
   this.size = params.size
   this.stuffing = params.stuffing
}
Hamburger.prototype = Object.create(MenuItemsCreator.prototype)
Hamburger.prototype.constructor = Hamburger
Hamburger.prototype.getSize = function() {
   var sumLittle = 0
   var sumBig = 0
   for (var key in myOrder.smallBurgersCounter) {
      sumLittle = sumLittle + myOrder.smallBurgersCounter[key]
   }
   for (var key in myOrder.bigBurgersCounter) {
      sumBig = sumBig + myOrder.bigBurgersCounter[key]
   }
   console.log(sumLittle, 'small and', sumBig, 'big burger(s) in your order')
} 
Hamburger.prototype.getStuffing = function() {
   for (var key in myOrder.smallBurgersCounter) {
      if (myOrder.smallBurgersCounter[key] > 0) {
         if (key === 'smallCheese') {
            console.log(myOrder.smallBurgersCounter[key], 'small burger(s) with cheese stuffing in your order')
         } else if (key === 'smallSalad') {
            console.log(myOrder.smallBurgersCounter[key], 'small burger(s) with salad stuffing in your order')
         } else if (key === 'smallPotato') {
            console.log(myOrder.smallBurgersCounter[key], 'small burger(s) with potato stuffing in your order')
         } 
      } 
   }
   for (var key in myOrder.bigBurgersCounter) {
      if (myOrder.bigBurgersCounter[key] > 0) {
         if (key === 'bigCheese') {
            console.log(myOrder.bigBurgersCounter[key], 'large burger(s) with cheese stuffing in your order')
         } else if (key === 'bigSalad') {
            console.log(myOrder.bigBurgersCounter[key], 'large burger(s) with salad stuffing in your order')
         } else if (key === 'bigPotato') {
            console.log(myOrder.bigBurgersCounter[key], 'large burger(s) with potato stuffing in your order')
         } 
      } 
   }
}


var DishSalad = function(params) {
   MenuItemsCreator.apply(this, arguments)
   this.kind = params.kind
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
   this.bigBurgersCounter = params.bigBurgersCounter
   this.smallBurgersCounter = params.smallBurgersCounter
   this.dishSaladCounter = params.dishSaladCounter
   this.drinkCounter = params.drinkCounter
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
               myOrder.dishSaladCounter.caesarSalad.splice(myOrder.dishSaladCounter.caesarSalad[counter-1], 1)
            }
         })
      } else if (upKind === 'OLIVIE') {
         var counter = 0
         myOrder.dishSaladCounter.olivieSalad.map(function(saladItem) {
            counter++
            if (saladItem[1] === grams){ 
               myOrder.dishSaladCounter.olivieSalad.splice(myOrder.dishSaladCounter.olivieSalad[counter-1], 1)
            }
         })
      } else {
         console.log('We have not got salads like this:', kind, '- please chouse another (CAESAR or OLIVIE)')
      }
   } else {
      console.log('You have not added any salad')
   }
}
NewOrder.prototype.addDrink = function(total) {
   upTotal = total.toUpperCase()
   if (upTotal === 'COLA') {
      myOrder.drinkCounter.cola++
   } else if (upTotal === 'COFFEE') {
      myOrder.drinkCounter.coffee++
   } else {
      console.log('We have not got drinks like this:', total, '- please chouse another (COLA, COFFEE)')
   }  
}
NewOrder.prototype.delDrink = function(total) {
   upTotal = total.toUpperCase()
   if (upTotal === 'COLA' && myOrder.drinkCounter.cola > 0) {
      myOrder.drinkCounter.cola--
   } else if (upTotal === 'COFFEE' && myOrder.drinkCounter.coffee > 0) {
      myOrder.drinkCounter.coffee--
   } else {
      console.log("You don't have any drinks like this in your order yet")
   }
} 
NewOrder.prototype.pay = function() { //TODO:
   console.log('pay is work')
} 


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
   },
   kindOfStuffing: ['cheese', 'salad', 'potato'] //FIXME:поменять методы для оптимизации и исключения этих значений из них. То есть, проходимся по этому массиву и, если есть сопадения, то выполняем действие, это должно позволить масштабировать код в будущем при надобности
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
   },
   drinkCounter: {
      cola: 0,
      coffee: 0
   }
   // show: console.log(drink.kind.COLA[1] + 10),
})
//TODO:
// Object.defineProperties(myOrder, {
//    'property1': {
//       writable: false,
//       configurable: false
//     },
// })




myOrder.addBigBurger('cheese')
myOrder.addSmallBurger('POTato')
myOrder.addSmallBurger('cheese')
myOrder.addDishSalad('caesar', 150)
myOrder.addDishSalad('olivie', 35)
myOrder.addDrink('cola')

// hamburger.getSize()
// hamburger.getStuffing()

// console.log(myOrder)





// node menu.js