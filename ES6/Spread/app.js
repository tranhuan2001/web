
// Spread
var array1 = ['Javascript', 'PHP', 'Ruby']
var array2 = ['ReactJS', 'Dart']

// nối 2 array1 và array2
var array3 = [...array2, ...array1]
console.log(array3)

var object1 = {
   name: 'Javascript'
}
var object2 = {
   price: 1000
}

// nối 2 object
var object3 = {
   ...object1,
   ...object2
}
console.log(object3)

// example with function
var array = ['Javascript', 'PHP', 'Ruby', 'ReactJS']

function logger(...rest) { // rest parameter
   for (var i = 0; i < rest.length; ++i) {
      console.log(rest[i])
   }
}

logger(...array) // spread