
// Destructuring: phân rã, đi qua, áp dụng với mảng và object
// Rest parameters

// array
var array = ['Javascript', 'PHP', 'Ruby']

var a1 = array[0]
var b1 = array[1]
var c1 = array[2]

var [a2, b2, c2] = array

var [a3, , c3] = array

var [a4, ...rest] = array

console.log(a1, b1, c1)
console.log(a2, b2, c2)
console.log(a3, c3)
console.log(rest)

// object
var course = {
   name: 'Javascript',
   price: 1000,
   children: {
      name: 'ReactJS'
   }
}

// note: phải lấy đúng key của object
var {name, price} = course
var {children: {name: childrenName}} = course // đổi tên sau dấu : để tránh trùng tên
var {des = 'default'} = course

console.log(childrenName, name, price, des)

function logger(a, b, ...params) {
   console.log(params)
}

logger(1, 2, 3, 4, 5, 6, 7, 8) // toán tử params(rest parameter) trả về 1 array
// trả về các phần tử còn lại

function logger2({name, price, ...rest}) {
   console.log(name)
   console.log(price)
   console.log(rest)
}

logger2({
   name: 'Javascript',
   price: 1000,
   description: 'Description content',
   children: {
      name: 'ReactJS',
      price: 2000
   }
})