
// Promise

// sync / async
// example sync: đồng bộ
/* 
console.log('1')
console.log('2')
*/
// example async: bất đồng bộ
// async: setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
/* 
setTimeout(function() {
   console.log('1')
}, 1000)
console.log('2')
*/

// pains
// callback hell
/* 
setTimeout(function() {
   console.log('1') // do 1
   setTimeout(function() {
      console.log('2') // do 2
      setTimeout(function() {
         console.log('3') // do 3
         setTimeout(function() {
            console.log('4') // do 4
            setTimeout(function() {
               console.log('5') // do 5
            }, 1000)
         }, 1000)
      }, 1000)
   }, 1000)
}, 1000)
*/

// pyramid of doom

// 1. new promise
// 2. executor

/* 
var promise = new Promise(
   // executor
   function(resolve, reject) {
      // logic
      // Thành công: call resolve()
      // Thất bại: call reject()
      resolve([
         'Javascript',
         'PHP'
      ])
      // reject()
   }
)

// 3 trạng thái của promise
// 1. Pending: chờ
// 2. Fulfilled: thành công
// 3. Rejected: thất bại

promise
   .then(function(course) {
      console.log('successfully')
      console.log(course)
      // to call when call resolve()
   })

   .catch(function() {
      console.log('failed')
      // to call when call reject()
   })

   .finally(function() {
      console.log('done')
      // to call when call resolve() or reject()
   })
*/

// chain: tính chất chuỗi, cho phép thực hiện nhiều lần .then()
/* 
var promise2 = new Promise(
   function(resolve, reject) {
      resolve()
   }
)

promise2
   .then(function() {
      return 1;
   })
   .then(function(data) {
      console.log(data)
      return 2;
   })
   .then(function(data) {
      console.log(data)
   })
   // khi return 1 promise: câu lệnh then sau sẽ phải chờ đến khi câu lệnh then trước trả giá trị
   .then(function() {
      return new Promise(function(resolve) {
         setTimeout(function() {
            resolve([1, 2, 3])
         }, 3000)
      })
   })
   .then(function(data) {
      console.log(data)
   })
*/

// Bài toán callback hell example
/* 
function sleep(ms) {
   return new Promise(function(resolve, reject) {
      setTimeout(resolve, ms)
   })
}

sleep(1000)
   .then(function() {
      console.log(1)
      return sleep(1000)
   })
   .then(function() {
      console.log(2)
      return sleep(1000)
   })
   .then(function() {
      return new Promise(function(resolve, reject) {
         reject('Error')
      })
   })
   // khi bị reject giữa thì các câu lệnh phía sau sẽ không được thực hiện
   .then(function() {
      console.log(3)
   })
   .catch(function(data) {
      console.log(data)
   })
*/

// 1. Promise.resolve()
// 2. Promise.reject()
// 3. Promise.all()
var promise1 = new Promise(function(resolve, reject) {
   setTimeout(function() {
      resolve([1])
   }, 1000)
})

var promise2 = Promise.reject('Error')

Promise.all([promise1, promise2])
   .then(function(result) {
      console.log(promise1.contact(promise2))
   })
   .catch(function(data) {
      console.log(data)
   })