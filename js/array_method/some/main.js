var courses = [
   {
      id: 1,
      name: 'Javascript',
      coin: 250
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
      coin: 400
   },
   {
      id: 5,
      name: 'ReactJS',
      coin: 500
   }
]

var isFree = courses.some(function(course, index, array) {
   console.log(index)
   return course.coin === 0
})

console.log(isFree)

Array.prototype.some2 = function(callback) {
   for (var index in this) {
      if (this.hasOwnProperty(index)) {
         if (callback(this[index], index, this)) {
            return true
         }
      }
   }
   return false
}

var isFree2 = courses.some2(function(course, index, array) {
   console.log(index)
   return course.coin === 0
})

console.log(isFree2)