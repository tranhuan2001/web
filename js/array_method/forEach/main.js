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

// courses.forEach(function(course, index) {
//    console.log(index, course)
// })

Array.prototype.forEach2 = function(callback, index) {
   var arrayLength = this.length
   for (var i = 0; i < arrayLength; ++i) {
      callback(this[i], i)
   }
}

courses.forEach2(function(course, index) {
   console.log(index, course)
})