function MenuItemCreator(name, price, calories) {
   this.name = name
   this.price = price
   this.calories = calories
}
MenuItemCreator.prototype.calculatePrice = function() {
   return this.price  
}
MenuItemCreator.prototype.calculateCalories = function() {
   return this.calories
}


function Hamburger(size, stuffing) {
   MenuItemCreator.apply(this)   
   this.size = size
   this.stuffing = stuffing
   this.name = size.name + ' hamburger with ' + stuffing.name
   this.price = size.price + stuffing.price
   this.calories = size.calories + stuffing.calories
}
Hamburger.prototype = Object.create(MenuItemCreator.prototype)
Hamburger.prototype.constructor = Hamburger
Hamburger.prototype.getSize = function() {
   console.log('This is', this.size.name.toLowerCase(), 'hamburger')
}
Hamburger.prototype.getStuffing = function() {
   console.log('That hamburger with', this.stuffing.name, 'stuffing')
}
Hamburger.SIZE_SMALL = { name: 'Small', price: 50, calories: 20 }
Hamburger.SIZE_LARGE = { name: 'Large', price: 100, calories: 40 }
Hamburger.STUFFING_CHEESE = { name: 'cheese', price: 10, calories: 20 }
Hamburger.STUFFING_SALAD = { name: 'salad', price: 20, calories: 5 }
Hamburger.STUFFING_POTATO = { name: 'potato', price: 15, calories: 10 }


function Salad(saladKind, gramms) {
   MenuItemCreator.apply(this, [saladKind])
   this.gramms = gramms || 100
   this.name = saladKind.name + ' salad'
   this.price = saladKind.price * (gramms / 100)
   this.calories = saladKind.calories * (gramms / 100)
}
Salad.prototype = Object.create(MenuItemCreator.prototype)
Salad.prototype.constructor = Salad
Salad.CAEZAR = { name: 'Caezar', price: 100, calories: 20 }
Salad.OLIVIER = { name: 'Olivier', price: 50, calories: 80 }


function Drink(drinkKind) { 
   MenuItemCreator.apply(this, [drinkKind.name, drinkKind.price, drinkKind.calories])
}
Drink.prototype = Object.create(MenuItemCreator.prototype)
Drink.prototype.constructor = Drink
Drink.COLA = { name: 'Cola', price: 50, calories: 40 }
Drink.COFFEE = { name: 'Coffee', price: 80, calories: 20 }


function Order(items) { 
   this.items = items
   this.pay = false
}
Order.prototype.getOrder = function() {
   var orderListArr = []
   this.items.map(function(dishElement) {
      orderListArr.push(dishElement.name)
   })
   var orderListArrToStr = orderListArr.join(' + ')
   console.log('Ur order:', orderListArrToStr)
}
Order.prototype.calculatePrice = function() {
   var price = 0
   this.items.forEach(function(dishElement) {
      price += dishElement.calculatePrice()
   }) 
   console.log('Full price:', price, 'tugriks')
}
Order.prototype.calculateCalories = function() {
   var calories = 0 
   for (var index = 0; index < this.items.length; index++) {
      var dishElement = this.items[index]
      calories += dishElement.calculateCalories()
   }
   console.log('Total energy value:', calories, 'calories')
}
Order.prototype.addItems = function(newItems) {
   if (this.pay === false) {
      this.items = this.items.concat(newItems)
      this.getOrder()
   } else {
      console.log('To add new items please create a new order')
   }
}
Order.prototype.deleteItems = function() {
   if (this.pay === false) {
      var delArgs = Array.prototype.slice.call(arguments) 
      this.items = this.items.filter(function(dishElement) {
         return delArgs.indexOf(dishElement)
      })
      this.getOrder()
   } else {
      console.log('It is no longer possible to delete items in this order')
   }
}
Order.prototype.payOrder = function() {
   this.pay = true
   console.log('The order is fully paid')
}


var myNewHamburger1 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO)
var myNewHamburger2 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE)
var myNewSalad1 = new Salad(Salad.OLIVIER, 200)
var myNewDrink1 = new Drink(Drink.COLA)
var myOwnOrder1 = new Order([myNewHamburger1, myNewSalad1, myNewDrink1])

myNewHamburger1.getSize()
myNewHamburger2.getStuffing()

myOwnOrder1.getOrder()
myOwnOrder1.calculatePrice()
myOwnOrder1.calculateCalories()

myOwnOrder1.addItems(myNewHamburger2)
myOwnOrder1.calculatePrice()
myOwnOrder1.calculateCalories()

myOwnOrder1.deleteItems(myNewHamburger2)
myOwnOrder1.calculatePrice()
myOwnOrder1.calculateCalories()

myOwnOrder1.payOrder()
myOwnOrder1.deleteItems(myNewDrink1)
myOwnOrder1.addItems(myNewHamburger2)

// node menu.js