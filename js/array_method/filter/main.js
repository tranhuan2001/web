var courses = [
   {
      name: 'Javascript',
      coin: 200
   },
   {
      name: 'PHP',
      coin: 400
   }
]

var filterCourse = courses.filter(function(course, index, array) {
   return course.coin > 300
})

console.log(filterCourse)

Array.prototype.filter2 = function(callback) {
   var output = []
   for (var index in this) {
      var result = callback(this[index], index, this)
      if (result) {
         output.push(this[index])
      }
   }
   return output
}

var filterCourse2 = courses.filter2(function(course, index, array) {
   return course.coin > 300
})

console.log(filterCourse2)