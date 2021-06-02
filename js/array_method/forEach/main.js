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

courses.forEach(function(course, index, array) {
   console.log(index, course, array)
})

Array.prototype.forEach2 = function(callback) {
   for (var index in this) {
      if (this.hasOwnProperty(index)) {
         callback(this[index], index, this)
      }
   }
}

courses.forEach2(function(course, index, array) {
   console.log(index, course, array)
})