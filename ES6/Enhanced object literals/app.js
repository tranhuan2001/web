
// Enhanced object literals

// 1. Định nghĩa key: values cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

var name = 'Javascript'
var price = 1000

var course1 = {
   name: name,
   price: price,
   getName: function() {
      return this.name
   }
}
console.log(course1)
console.log(course1.getName())

// ES6
var course2 = {
   name,
   price,
   getName() {
      return this.name
   }
}
console.log(course2)
console.log(course2.getName())

var fieldName = 'name'
var fieldPrice = 'price'
var course3 = {
   [fieldName]: 'Javascript',
   [fieldPrice]: 1000
}
console.log(course3)