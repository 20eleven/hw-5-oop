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


var NewOrder = function() {
   MenuItemsCreator.apply(this, arguments)
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
   // show: console.log(drink.kind.COLA[1] + 10),
})
Object.defineProperty(myOrder, 'addBurgers', {
   get: function() {
      return this.quantityHamburger + ' ' + this.sizeHamburger + ' ' + this.stuffingHamburger + ' ' + this.anotherSizeQuantityHamburger + ' ' + this.anotherSizeHamburger + ' ' + this.anotherSizeHamburger + ' ' + this.anotherSizeStuffingHamburger
   },
   set: function(value) {
      var burger = value.split(' ').map(function(wordItem) {
         return wordItem
      })
      this.quantityHamburger = +burger[0] 
      this.sizeHamburger = burger[1]
      this.stuffingHamburger = burger[4]
      if (value.includes('and')) {
         var moreDiffBurger = value.split('and')[1].split(' ').map(function(wordItem) {
            return wordItem
         })
         this.anotherSizeQuantityHamburger = +moreDiffBurger[1]
         this.anotherSizeHamburger = moreDiffBurger[2]
         this.anotherSizeStuffingHamburger = moreDiffBurger[5]
      }     
   }
})
Object.defineProperty(myOrder, 'addSalad', {
   get: function() {
      return this.myGramsSalad + ' ' + this.myDishSalad
   },
   set: function(value) {
      var salad = value.split(' ').map(function(wordItem) {
         return wordItem
      })
      this.myGramsSalad = salad[0]
      this.myDishSalad = salad[1]
   }
})
Object.defineProperty(myOrder, 'addDrink', {
   get: function() {
      return this.myDrink 
   },
   set: function(value) {
      this.myDrink = value
   }
})
// Object.defineProperty(myOrder, 'is', {
//    get: function() {
//       return this.quantityHamburger + ' ' + this.sizeHamburger + ' ' + this.stuffingHamburger + ' ' + this.myDishSalad + ' ' + this.gramsSalad + ' ' + this.myDrink
//    },
//    set: function(value) {
//       var splitThat = value.split(', ')    
//       var burger = splitThat[0].split(' ').map(function(wordItem) {
//          return wordItem
//       })
//       this.quantityHamburger = +burger[0] 
//       this.sizeHamburger = burger[1]
//       this.stuffingHamburger = burger[4]
//       var numArr = []
//       var symArr = []
//       for (var index = 0; index < splitThat[1].length; index++) {
//          var char = splitThat[1][index]
//          isNaN(Number(char)) ? symArr.push(char) : numArr.push(+char)
//       }
//       this.myDishSalad = symArr.join('')
//       numArr.pop()
//       this.gramsSalad = +numArr.join('')
//       this.myDrink = splitThat[2]
//    }
// })




// myOrder.is = '1 small hamburger with potato, 150 caesar, cola'
myOrder.addBurgers = '1 small hamburger with potato and 2 big hamburger with cheese'
myOrder.addSalad = '150 caesar'
myOrder.addDrink = 'cola'

console.log(myOrder);





// node menu.js