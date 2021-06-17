
// Let / Const

// So sánh giữa các kiểu khai báo
// 1. var / let, const: Scope, Hosting
// 2. const / var, let: Assignment

// Scope: Phạm vi truy cập
// var: Không hạn chế truy cập
// let / const: bị hạn chế truy cập khi ở ngoài code block nhu if(), {}...
if (true) {
   var course1 = 'PHP'
}
console.log(course1);

if (true) {
   // let course2 = 'PHP'
   const course2 = 'PHP'
}
console.log(course2);

// Assignment: thay đổi giá trị của biến
// const: không đc thay đổi giá trị của biến
// error
const a = 1
a = 2 // error
// satisfy
const b = {
   course = 'Javascript'
}
b.course = 'PHP' // satisfy
