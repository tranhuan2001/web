var courses = [
   {
      id: 1,
      name: 'Javascript',
      coin: 0
   },
   {
      id: 2,
      name: 'HTML, CSS',
      coin: 0
   },
   {
      id: 3,
      name: 'Ruby',
      coin: 0
   },
   {
      id: 4,
      name: 'PHP',
      coin: 0
   },
   {
      id: 5,
      name: 'ReactJS',
      coin: 0
   }
]

// var isFree = courses.every(function(course, index) {
//    console.log(index)
//    return course.coin === 0
// })

// console.log(isFree)

Array.prototype.every2 = function(callback) {
   var arrayLength = this.length
   for (var i = 0; i < arrayLength; ++i) {
      if (!callback(this[i])) {
         return false
      }
   }
   return true
}

var isFree = courses.every2(function(course, index) {
   return course.coin === 0
})

console.log(isFree)