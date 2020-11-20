//----------------------------------------------------------------------------------------
//reduce polyfill
if (!Array.prototype.reduce) {
   Array.prototype.reduce = function(callback/*, initialValue*/) {
     'use strict';
     if (this == null) {
       throw new TypeError('Array.prototype.reduce called on null or undefined');
     }
     if (typeof callback !== 'function') {
       throw new TypeError(callback + ' is not a function');
     }
     var t = Object(this), len = t.length >>> 0, k = 0, value;
     if (arguments.length >= 2) {
       value = arguments[1];
     } else {
       while (k < len && ! (k in t)) {
         k++; 
       }
       if (k >= len) {
         throw new TypeError('Reduce of empty array with no initial value');
       }
       value = t[k++];
     }
     for (; k < len; k++) {
       if (k in t) {
         value = callback(value, t[k], k, t);
       }
     }
     return value;
   };
 }
//----------------------------------------------------------------------------------------


//task solution ↓↓↓
function MenuItem(name, price, calories) {
   this.name = name
   this.price = price
   this.calories = calories
}
MenuItem.prototype.calculatePrice = function() {
   return this.price  
}
MenuItem.prototype.calculateCalories = function() {
   return this.calories
}


function Hamburger(burgerSize, burgerStuffing) {
   MenuItem.call(this, burgerSize, burgerStuffing)   
   this.size = burgerSize.name
   this.stuffing = burgerStuffing.name
   this.name = burgerSize.name + ' hamburger with ' + burgerStuffing.name
   this.price = burgerSize.price + burgerStuffing.price
   this.calories = burgerSize.calories + burgerStuffing.calories
}
Hamburger.prototype = Object.create(MenuItem.prototype)
Hamburger.prototype.constructor = Hamburger
Hamburger.prototype.getSize = function() {
   console.log('This is', this.size.toLowerCase(), 'hamburger')
   return this.size
}
Hamburger.prototype.getStuffing = function() {
   console.log('That hamburger with', this.stuffing, 'stuffing')
   return this.stuffing
}
Hamburger.SIZE_SMALL = { name: 'Small', price: 50, calories: 20 }
Hamburger.SIZE_LARGE = { name: 'Large', price: 100, calories: 40 }
Hamburger.STUFFING_CHEESE = { name: 'cheese', price: 10, calories: 20 }
Hamburger.STUFFING_SALAD = { name: 'salad', price: 20, calories: 5 }
Hamburger.STUFFING_POTATO = { name: 'potato', price: 15, calories: 10 }


function Salad(saladKind, gramms) {
   MenuItem.call(this, saladKind)
   this.gramms = gramms || 100
   this.name = saladKind.name + ' salad'
   this.price = saladKind.price * (gramms / 100)
   this.calories = saladKind.calories * (gramms / 100)
}
Salad.prototype = Object.create(MenuItem.prototype)
Salad.prototype.constructor = Salad
Salad.CAEZAR = { name: 'Caezar', price: 100, calories: 20 }
Salad.OLIVIER = { name: 'Olivier', price: 50, calories: 80 }


function Drink(drinkKind) { 
   MenuItem.call(this, drinkKind.name, drinkKind.price, drinkKind.calories)
}
Drink.prototype = Object.create(MenuItem.prototype)
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
   return orderListArr
}
Order.prototype.calculatePrice = function() {
   var initialValue = 0
   var totalPrice = this.items.reduce(function(accumulator, currentValue) {
       return accumulator + currentValue.price
   }, initialValue)
   console.log('Full price:', totalPrice, 'tugriks')
   return totalPrice
}
Order.prototype.calculateCalories = function() {
   var initialValue = 0
   var totalCalories = this.items.reduce(function(accumulator, currentValue) {
       return accumulator + currentValue.calories
   }, initialValue)
   console.log('Total energy value:', totalCalories, 'calories')
   return totalCalories
}
Order.prototype.addItems = function(newItems) {
   if (this.pay === false) {
      this.items = this.items.concat(newItems)
      this.getOrder()
   } else {
      console.log('To add new items please create a new order')
   }
}
Order.prototype.deleteItems = function(delItem) {
   if (this.pay === false) {
      var delArgs = Array.prototype.slice.call(arguments) 
      if (this.items.includes(delItem)) {
         this.items = this.items.filter(function(dishElement) {
            return delArgs.indexOf(dishElement)
         })
         this.getOrder()
      } else {
         console.log('You do not have item like this in your order')
      }      
   } else {
      console.log('It is no longer possible to delete items in this order')
   }
}

function deepFreeze(obj) {
   var propNames = Object.getOwnPropertyNames(obj)
   propNames.forEach(function(name) {
      var prop = obj[name]
      if (typeof prop == 'object' && prop !== null)
         deepFreeze(prop)
   })
   return Object.freeze(obj)
}

Order.prototype.payOrder = function() {
   this.pay = true
   deepFreeze(this)
   console.log('The order is fully paid')
}


var myNewHamburger1 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO)
var myNewHamburger2 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE)
var myNewSalad1 = new Salad(Salad.OLIVIER, 200)
var myNewDrink1 = new Drink(Drink.COLA)
var myOwnOrder1 = new Order([myNewHamburger1, myNewSalad1, myNewDrink1])

console.log()
myNewHamburger1.getSize()
myNewHamburger2.getStuffing()
console.log('->')
myOwnOrder1.getOrder()
myOwnOrder1.calculatePrice()
myOwnOrder1.calculateCalories()
console.log('->')
myOwnOrder1.addItems(myNewHamburger2)
myOwnOrder1.calculatePrice()
myOwnOrder1.calculateCalories()
console.log('->')
myOwnOrder1.deleteItems(myNewHamburger2)
myOwnOrder1.deleteItems(myNewHamburger2)
myOwnOrder1.calculatePrice()
myOwnOrder1.calculateCalories()
console.log('->')
myOwnOrder1.payOrder()
myOwnOrder1.deleteItems(myNewDrink1)
myOwnOrder1.addItems(myNewHamburger2)

// node menu.js